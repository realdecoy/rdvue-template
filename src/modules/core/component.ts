// ----------------------------------------------------------------------------
// Types

import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
type ComponentOptions = {
  name: string;
  components?: { [key: string]: unknown };
};

type Prototype = {
  contructor: Function;
  [key: string | symbol]: unknown;
} & Function;
// eslint-disable-next-line no-unused-vars
type SetupFunction = (this: any, props: {}, ctx: {}) => void;
type Callback = (this: any) => void;

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const SETUP_SYMBOL = Symbol();
const MOUNTED_SYMBOL = Symbol();
const UNMOUNTED_SYMBOL = Symbol();

// ----------------------------------------------------------------------------
// Decorators
// ----------------------------------------------------------------------------
// eslint-disable-next-line no-unused-vars
export function component<T extends { new (...args: unknown[]): T }>(
  options: ComponentOptions
) {
  return function (target: T): void {
    const { prototype } = target;
    const instance = new target();
    const setupFn = (prototype as Prototype)[SETUP_SYMBOL] as
      | SetupFunction
      | undefined;

    const mountedFn = (prototype as Prototype)[MOUNTED_SYMBOL] as
      | Callback
      | undefined;

    const unmountedFn = (prototype as Prototype)[UNMOUNTED_SYMBOL] as
      | Callback
      | undefined;

    const _module = {
      ...options,
      setup: (props: {}, ctx: {}) => {
        setupFn?.apply(instance as unknown, [props, ctx]);

        if (mountedFn) {
          onMounted(mountedFn);
        }

        if (unmountedFn) {
          onUnmounted(unmountedFn);
        }

        const viewModel: Record<string, any> = createViewModel(instance);
        const { t } = useI18n();

        // Attach localizer.
        viewModel.t = t;

        return viewModel;
      },
    } as unknown as void;

    return _module;
  };

  function createViewModel(instance: T) {
    const viewModel: Record<string, any> = { ...instance };

    // Attach inherited members from 1 level deep (first prototype).
    // This will make methods defined on Class controller available
    // to the view.
    Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach(
      (memberName) => {
        const memberValue = (instance as Record<string, any>)[memberName];
        let boxedMemberValue: unknown = memberValue;

        if (typeof memberValue === 'function') {
          boxedMemberValue = function () {
            return memberValue();
          }.bind(instance);
        }

        viewModel[memberName] = boxedMemberValue;
      }
    );

    return viewModel;
  }
}

export function setup<Target, Method extends string>(
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  return MethodDecoratorFactory('setup', SETUP_SYMBOL, prototype, method, desc);
}

export function mounted<Target, Method extends string>(
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  return MethodDecoratorFactory(
    'mounted',
    MOUNTED_SYMBOL,
    prototype,
    method,
    desc
  );
}

export function unmounted<Target, Method extends string>(
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  return MethodDecoratorFactory(
    'unmounted',
    UNMOUNTED_SYMBOL,
    prototype,
    method,
    desc
  );
}

function MethodDecoratorFactory<Target, Method extends string>(
  name: string,
  symbol: Symbol,
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  const originalFn = (prototype as Prototype)[method];
  const hasPreviousSetup =
    (prototype as Prototype)[symbol as any] !== undefined;

  if (hasPreviousSetup) {
    throw new Error(
      `Only once instance of @${name} decorator is valid per component class. \
Multiple copies found.`
    );
  }

  if (typeof originalFn === 'function') {
    const overrideFn = <TypedPropertyDescriptor<() => void>>(
      function (this: unknown, ...args: []) {
        // eslint-disable-next-line no-invalid-this
        const result = originalFn.apply(this, args);

        return result;
      }
    );

    desc.value = overrideFn;

    (prototype as Prototype)[symbol as any] = overrideFn;
  }
}

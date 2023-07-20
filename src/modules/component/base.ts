import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  MethodDecoratorFactory,
  MOUNTED_SYMBOL,
  SETUP_SYMBOL,
  UNMOUNTED_SYMBOL,
  type ComponentOptions,
  type Callback,
  type Prototype,
  type SetupFunction,
} from './shared';

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

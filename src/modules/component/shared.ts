/* eslint-disable no-invalid-this */
// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------
export type ComponentOptions = {
  name: string;
  components?: { [key: string]: unknown };
};

export type Prototype = {
  contructor: Function;
  [key: string | symbol]: unknown;
} & Function;
// eslint-disable-next-line no-unused-vars
export type SetupFunction = (this: any, props: {}, ctx: {}) => void;
// eslint-disable-next-line no-unused-vars
export type Callback = (this: any) => void;

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
export const SETUP_SYMBOL = Symbol();
export const MOUNTED_SYMBOL = Symbol();
export const UNMOUNTED_SYMBOL = Symbol();
export const EMIT_SYMBOL = Symbol();

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
export function MethodDecoratorFactory<Target, Method extends string, T>(
  name: string,
  symbol: Symbol,
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor,
  eventName?: string
): void | TypedPropertyDescriptor<() => T> {
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
    const overrideFn = <TypedPropertyDescriptor<() => T>>(
      function (this: unknown, ...args: []) {
        // eslint-disable-next-line no-invalid-this
        const result = originalFn.apply(this, args);

        // If the decorator is 'emit', emit the event
        if (symbol === EMIT_SYMBOL) {
          // @ts-ignore
          this.$emit(eventName || method, result);
        }

        return result;
      }
    );

    desc.value = overrideFn;

    (prototype as Prototype)[symbol as any] = overrideFn;
  }
}

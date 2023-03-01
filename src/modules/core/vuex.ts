import { Store } from 'vuex';
import { Action, getModule, VuexModule } from 'vuex-module-decorators';
import { ActionDecoratorParams } from 'vuex-module-decorators/dist/types/action';

interface Lookup<Result = unknown> {
  [key: number]: Result
  [key: string]: Result
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VuexModuleDef {
  getModule(): { [key: string]: unknown }
  getModuleName(): string
}

type ConstructorOf<C> = new (...args: any[]) => C;
type UnknownFunction = (...args: unknown[]) => unknown;

/**
 * Performs the relevant magic to make Vuex Actions and Mutations support
 * multiple parameters.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MultiParamAction<V>(options: ActionDecoratorParams = {}) {
  return (target: object, property: string, descriptor: PropertyDescriptor) => {
    // Save original function.
    const originalFn = descriptor.value as UnknownFunction;

    const actionFn = Action(options);

    // Override method. We expect a single Array param which we will spread
    // To invoke the underlying original method. The single array param is
    // Produce by getMultiParamModule via not spreading the supplied args
    // But just passing the Array. This is necessary to allow Vuex actions
    // Which support multiple arguments (one 1 'payload' by default design).
    descriptor.value = function (this: ThisParameterType<unknown>, args: unknown[]) {
      return originalFn.call(this, ...args);
    };

    // Override method once more with @Action decorator.
    const result = actionFn(target, property, descriptor);

    return result;
  };
}

export function getMultiParamModule<StoreType extends VuexModule>(
  moduleClass: ConstructorOf<StoreType>,
  moduleName: string,
  store: Store<unknown>
) {
  return new Proxy<StoreType>(getModule(moduleClass, store), {
    get(target: Lookup<any>, prop: string | number | symbol) {
      const targetValue = target[prop as string] as unknown;
      let result: unknown;

      if (typeof targetValue === 'function') {
        result = function (this: ThisParameterType<unknown>, ...args: unknown[]) {
          /**
           * Call the original function with the arguments as a single
           * parameter (do not spread array). Vuex expects a single params.
           * we will use the MultiParamAction decorator to handle spreading
           * just before the underlying method gets invoked.
           */

          // eslint-disable-next-line no-invalid-this
          return (targetValue as UnknownFunction).call(this, args);
        };
      } else {
        result = targetValue;
      }

      return result;
    }
  });
}


import { EMIT_SYMBOL, MethodDecoratorFactory } from './shared';

export function emit<T = any>(eventName?: string) {
  return function <Target, Method extends string>(
    prototype: Target,
    method: Method,
    desc: PropertyDescriptor
  ): void | TypedPropertyDescriptor<() => T> {
    return MethodDecoratorFactory<Target, Method, T>(
      'emit',
      EMIT_SYMBOL,
      prototype,
      method,
      desc,
      eventName
    );
  };
}

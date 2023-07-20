import {
  MethodDecoratorFactory,
  MOUNTED_SYMBOL,
  UNMOUNTED_SYMBOL,
} from './shared';

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

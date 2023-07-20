import { MethodDecoratorFactory, MOUNTED_SYMBOL } from './shared';

export function watch<Target, Method extends string>(
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  // TODO: implement
  return void 0;
}

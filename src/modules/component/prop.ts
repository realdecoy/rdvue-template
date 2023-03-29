import { MethodDecoratorFactory, MOUNTED_SYMBOL } from './shared';

// TODO: this decorator signature is wrong. Use the correct
// kind for making a property decorator.
export function prop<Target, Method extends string>(
  prototype: Target,
  method: Method,
  desc: PropertyDescriptor
): void | TypedPropertyDescriptor<() => void> {
  // TODO: implement
  return void 0;
}

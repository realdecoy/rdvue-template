import { Lookup } from './lookup';

type TransformDelegate<R> = ((value: string | undefined) => R);

export function fromEnv<R extends string | number | boolean = string>(
  key: string,
  transform?: TransformDelegate<R> | typeof Number | typeof Boolean
): R {
  const value = (process.env as Lookup<string | undefined>)[key];

  switch (transform) {
    case Number:
      if (value !== undefined) {
        return parseInt(value, 10) as R;
      }
      else {
        return NaN as R;
      }
    case Boolean:
      const isTrue = value === true.toString();

      // Should value not be the string 'true' or 'false', an exception
      // Will be generated. Blocks Truthy parsing.
      if (!isTrue && value !== false.toString()) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`fromEnv(): value "${value}" is not a valid Boolean.`);
      }

      return (isTrue || false) as R;
    default:
      return transform !== undefined
        ? transform(value) as R
        : value as R;
  }
}

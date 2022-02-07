export type Maybe<T> = T | null | undefined;
export type Nullable<T> = T | null;


// Used to override default function signatures from packages
export type DerivedFunction<
  BaseFunction extends (...args: unknown[]) => unknown,
  T extends unknown[] = unknown[]
> = BaseFunction extends (...a: infer U) => infer R
  ? (...a: [...U, ...T]) => R
  : never;

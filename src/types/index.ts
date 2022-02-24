export type Maybe<T> = T | null | undefined;
export type Nullable<T> = T | null;


// Used to override default function signatures
export type DerivedFunction<
  BaseFunction extends (...args: unknown[]) => unknown,
  T extends unknown[] = unknown[]
> = BaseFunction extends (...a: infer U) => infer R
  ? (...a: [...U, ...T]) => R
  : never;

// Generic type for generator function that returns void
export type VoidGenerator<T = unknown, TNext = unknown> = Generator<T, void, TNext>;

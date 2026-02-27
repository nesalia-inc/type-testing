/**
 * Expect API - Familiar API similar to testing libraries.
 */

import type { Equal, NotEqual } from '../types/equality'

/**
 * Expect type - familiar API similar to testing libraries.
 *
 * @example
 * ```typescript
 * expect<string, string>().toBeEqual()
 * expect<string>().toBeAny()
 * ```
 */
export interface Expect<T, U = unknown> {
  toBeEqual(): Equal<T, U> extends true ? ExpectPass : ExpectFail<T, U>
  toBeNotEqual(): NotEqual<T, U> extends true ? ExpectPass : ExpectFail<T, U>
  toExtend(): T extends U ? ExpectPass : ExpectFail<T, U>
  toBeAssignableTo(): U extends T ? ExpectPass : ExpectFail<T, U>
}

export type ExpectPass = true

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ExpectFail<_T, _U> = never

/**
 * Creates an expectation for a type.
 */
export function expect<T, U = unknown>(): Expect<T, U> {
  return undefined as any
}

/**
 * ExpectFalse - for checking types resolve to false.
 *
 * @example
 * ```typescript
 * expectFalse<IsNever<string>>()
 * ```
 */
export function expectFalse<_T extends false>(): void {
  // Compile-time only
}

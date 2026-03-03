/**
 * Type equality utilities.
 */

import type { IsNever } from './special.js'

/**
 * Checks if two types are strictly equal.
 * Uses a technique that compares the structure while handling
 * special types like any, never, and unknown.
 *
 * @example
 * ```typescript
 * check<string>().equals<string>() // passes
 * check<string>().equals<number>() // fails at compile time
 * ```
 */
export type Equal<T, U> =
  (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2)
    ? true
    : false

/**
 * Checks if two types are not equal.
 *
 * @example
 * ```typescript
 * check<string>().notEquals<number>() // passes
 * ```
 */
export type NotEqual<T, U> = Equal<T, U> extends true ? false : true

/**
 * Simple equality check that works in more contexts.
 * Useful for simple type comparisons.
 */
export type SimpleEqual<T, U> = [T, U] extends [U, T] ? true : false

/**
 * Checks if both T and U are `never`.
 * This is a special case equality check that differs from Equal<T, U>
 * because Equal<never, never> returns false in TypeScript.
 *
 * Note: `any` is not treated as `never` - this utility specifically
 * checks for the `never` type. Use IsAny if you need to check for `any`.
 *
 * @example
 * ```typescript
 * type Test = IsNeverEqual<never, never> // true
 * type Test2 = IsNeverEqual<string, never> // false
 * type Test3 = IsNeverEqual<never, string> // false
 * type Test4 = IsNeverEqual<any, any> // false (any is not never)
 * ```
 */
export type IsNeverEqual<T, U> = IsNever<T> extends true
  ? IsNever<U> extends true
    ? true
    : false
  : false

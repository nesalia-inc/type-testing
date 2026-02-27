/**
 * Type equality utilities.
 */

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

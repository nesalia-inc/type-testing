/**
 * Type inhabitation utilities.
 */

import type { IsNever } from './special'

/**
 * Checks if a type is inhabited (has at least one value).
 *
 * @example
 * ```typescript
 * check<string>().isInhabited() // passes
 * check<never>().isInhabited() // fails
 * ```
 */
export type IsInhabited<T> = IsNever<T> extends true ? false : true

/**
 * Checks if a type is uninhabited (has no values).
 *
 * @example
 * ```typescript
 * check<never>().isUninhabited() // passes
 * check<string>().isUninhabited() // fails
 * ```
 */
export type IsUninhabited<T> = IsNever<T> extends true ? true : false

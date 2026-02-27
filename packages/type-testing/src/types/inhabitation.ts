/**
 * Type inhabitation utilities.
 */

/**
 * Checks if a type is inhabited (has at least one value).
 *
 * @example
 * ```typescript
 * check<string>().isInhabited() // passes
 * check<never>().isInhabited() // fails
 * ```
 */
export type IsInhabited<T> = [T] extends [never] ? false : true

/**
 * Checks if a type is uninhabited (has no values).
 *
 * @example
 * ```typescript
 * check<never>().isUninhabited() // passes
 * check<string>().isUninhabited() // fails
 * ```
 */
export type IsUninhabited<T> = [T] extends [never] ? true : false

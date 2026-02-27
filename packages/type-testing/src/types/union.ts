/**
 * Union and tuple detection utilities.
 */

/**
 * Checks if a type is a union.
 *
 * @example
 * ```typescript
 * check<'a' | 'b'>().isUnion() // passes
 * check<'a'>().isUnion() // fails
 * ```
 */
export type IsUnion<T, U = T> = [U] extends [never] ? false : T extends U ? [Exclude<U, never>] extends [T] ? false : true : false

/**
 * Checks if a type is a tuple.
 *
 * @example
 * ```typescript
 * check<[string, number]>().isTuple() // passes
 * check<string[]>().isTuple() // fails
 * ```
 */
export type IsTuple<T> = T extends readonly any[] ? (number extends T['length'] ? false : true) : false

/**
 * Checks if a type is an array.
 *
 * @example
 * ```typescript
 * check<string[]>().isArray() // passes
 * check<[string]>().isArray() // fails
 * ```
 */
export type IsArray<T> = T extends readonly any[] ? (IsTuple<T> extends true ? false : true) : false

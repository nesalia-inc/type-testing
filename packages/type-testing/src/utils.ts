/**
 * Additional utilities.
 */

import type { Equal } from './types/equality'

/**
 * Type that always resolves to true.
 * Useful for making compile-time assertions.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ExpectTrue<_T extends true> = true

/**
 * Type that validates equality and throws if not equal.
 */
export type ExpectEqual<T, U> = Equal<T, U> extends true ? T : never

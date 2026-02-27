/**
 * Check API - Chainable type checker.
 */

import type { Equal, NotEqual } from '../types/equality'
import type { IsAny, IsNever, IsUnknown, IsVoid, IsUndefined, IsNull, IsNullable, IsOptional } from '../types/special'
import type { IsUnion, IsTuple, IsArray } from '../types/union'
import type { IsInhabited, IsUninhabited } from '../types/inhabitation'
import type { HasProperty } from '../types/property'
import type { Parameters, ReturnType, Parameter } from '../types/function'
import type { Length } from '../types/length'

/**
 * Type representing a passing check.
 */
export type CheckPass = true

/**
 * Type representing a failing check.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type CheckFail<_T, _Expected> = never

/**
 * Helper to create a Check type.
 */
export type CheckBuilder<T> = Check<T>

/**
 * Chainable type checker for testing TypeScript types.
 *
 * @example
 * ```typescript
 * check<string>().equals<string>()
 * check<{ a: string }>().hasProperty('a')
 * ```
 */
export interface Check<T> {
  /**
   * Tests if this type equals another type.
   */
  equals<U>(): Equal<T, U> extends true ? CheckPass : CheckFail<T, U>

  /**
   * Tests if this type does not equal another type.
   */
  notEquals<U>(): NotEqual<T, U> extends true ? CheckPass : CheckFail<T, U>

  /**
   * Tests if this type extends another type (is assignable to).
   */
  extends<U>(): T extends U ? CheckPass : CheckFail<T, U>

  /**
   * Tests if this type is assignable from another type.
   */
  assignableTo<U>(): U extends T ? CheckPass : CheckFail<T, U>

  /**
   * Tests if this type has a specific property.
   */
  hasProperty<K extends keyof T>(): HasProperty<T, K> extends true ? CheckPass : CheckFail<T, { missingProperty: K }>

  /**
   * Gets the type of a specific property for further testing.
   */
  property<K extends keyof T>(): Check<T[K]>

  /**
   * Tests if this type is `any`.
   */
  isAny(): IsAny<T> extends true ? CheckPass : CheckFail<T, 'any'>

  /**
   * Tests if this type is `never`.
   */
  isNever(): IsNever<T> extends true ? CheckPass : CheckFail<T, 'never'>

  /**
   * Tests if this type is `unknown`.
   */
  isUnknown(): IsUnknown<T> extends true ? CheckPass : CheckFail<T, 'unknown'>

  /**
   * Tests if this type is `void`.
   */
  isVoid(): IsVoid<T> extends true ? CheckPass : CheckFail<T, 'void'>

  /**
   * Tests if this type is `undefined`.
   */
  isUndefined(): IsUndefined<T> extends true ? CheckPass : CheckFail<T, 'undefined'>

  /**
   * Tests if this type is `null`.
   */
  isNull(): IsNull<T> extends true ? CheckPass : CheckFail<T, 'null'>

  /**
   * Tests if this type is nullable (null or undefined).
   */
  isNullable(): IsNullable<T> extends true ? CheckPass : CheckFail<T, 'not nullable'>

  /**
   * Tests if this type is optional (may be undefined).
   */
  isOptional(): IsOptional<T> extends true ? CheckPass : CheckFail<T, 'not optional'>

  /**
   * Tests if this type is a union.
   */
  isUnion(): IsUnion<T> extends true ? CheckPass : CheckFail<T, 'not a union'>

  /**
   * Tests if this type is a tuple.
   */
  isTuple(): IsTuple<T> extends true ? CheckPass : CheckFail<T, 'not a tuple'>

  /**
   * Tests if this type is an array.
   */
  isArray(): IsArray<T> extends true ? CheckPass : CheckFail<T, 'not an array'>

  /**
   * Tests if this type is inhabited (has values).
   */
  isInhabited(): IsInhabited<T> extends true ? CheckPass : CheckFail<T, 'uninhabited'>

  /**
   * Tests if this type is uninhabited (has no values).
   */
  isUninhabited(): IsUninhabited<T> extends true ? CheckPass : CheckFail<T, 'inhabited'>

  /**
   * Gets the parameters of this function type.
   */
  parameters(): T extends (...args: any[]) => any ? Check<Parameters<T>> : Check<never>

  /**
   * Gets the return type of this function type.
   */
  returnType(): T extends (...args: any[]) => any ? Check<ReturnType<T>> : Check<never>

  /**
   * Gets the length of this array/tuple type.
   */
  length(): T extends readonly any[] ? Check<Length<T>> : Check<never>

  /**
   * Gets the parameter at a specific index.
   */
  parameter<N extends number>(): T extends (...args: any[]) => any ? Check<Parameter<T, N>> : Check<never>
}

/**
 * Creates a check for a specific type.
 *
 * @example
 * ```typescript
 * check<string>().equals<string>()
 * check<{ a: string }>().hasProperty('a')
 * ```
 */
export function check<T>(): CheckBuilder<T> {
  // This function exists only at runtime - the types are all compile-time
  return undefined as any
}

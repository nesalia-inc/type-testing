/**
 * Assert API - Alternative API that throws at compile time on failure.
 */

import type { Equal, NotEqual } from '../types/equality'
import type { IsAny, IsNever, IsUnknown, IsVoid, IsUndefined, IsNull, IsNullable, IsOptional } from '../types/special'
import type { IsUnion, IsTuple, IsArray } from '../types/union'
import type { IsInhabited, IsUninhabited } from '../types/inhabitation'
import type { HasProperty } from '../types/property'
import type { Check } from './check'

/**
 * Assert type - alternative API that throws at compile time on failure.
 *
 * @example
 * ```typescript
 * assert<string>().equals<string>()
 * ```
 */
export interface Assert<T> {
  equals<U>(): Equal<T, U> extends true ? AssertPass : AssertFail<T, U>
  notEquals<U>(): NotEqual<T, U> extends true ? AssertPass : AssertFail<T, U>
  extends<U>(): T extends U ? AssertPass : AssertFail<T, U>
  hasProperty<K extends keyof T>(): HasProperty<T, K> extends true ? AssertPass : AssertFail<T, { missingProperty: K }>
  property<K extends keyof T>(): Check<T[K]>
  isAny(): IsAny<T> extends true ? AssertPass : AssertFail<T, 'any'>
  isNever(): IsNever<T> extends true ? AssertPass : AssertFail<T, 'never'>
  isUnknown(): IsUnknown<T> extends true ? AssertPass : AssertFail<T, 'unknown'>
  isVoid(): IsVoid<T> extends true ? AssertPass : AssertFail<T, 'void'>
  isUndefined(): IsUndefined<T> extends true ? AssertPass : AssertFail<T, 'undefined'>
  isNull(): IsNull<T> extends true ? AssertPass : AssertFail<T, 'null'>
  isNullable(): IsNullable<T> extends true ? AssertPass : AssertFail<T, 'not nullable'>
  isOptional(): IsOptional<T> extends true ? AssertPass : AssertFail<T, 'not optional'>
  isUnion(): IsUnion<T> extends true ? AssertPass : AssertFail<T, 'not a union'>
  isTuple(): IsTuple<T> extends true ? AssertPass : AssertFail<T, 'not a tuple'>
  isArray(): IsArray<T> extends true ? AssertPass : AssertFail<T, 'not an array'>
  isInhabited(): IsInhabited<T> extends true ? AssertPass : AssertFail<T, 'uninhabited'>
  isUninhabited(): IsUninhabited<T> extends true ? AssertPass : AssertFail<T, 'inhabited'>
}

export type AssertPass = true

export type AssertFail<_T, _Expected> = never

export function assert<T>(): Assert<T> {
  return undefined as any
}

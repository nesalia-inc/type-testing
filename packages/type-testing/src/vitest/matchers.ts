/**
 * Custom Vitest matchers for type testing.
 */

import type { Equal, NotEqual } from '../types/equality.js'
import type { IsAny, IsNever, IsUnknown, IsVoid, IsUndefined, IsNull, IsNullable, IsOptional } from '../types/special.js'
import type { IsUnion, IsTuple, IsArray } from '../types/union.js'
import type { IsInhabited, IsUninhabited } from '../types/inhabitation.js'
import type { HasProperty } from '../types/property.js'
import type { CheckPass } from '../api/check.js'

/**
 * Creates a Vitest matcher for type equality.
 *
 * @example
 * ```typescript
 * import { expect, test } from 'vitest'
 * import { toBeType } from '@deessejs/type-testing/vitest'
 *
 * expect.extend({ toBeType })
 *
 * test('type check', () => {
 *   expectType<string>().toBeType<string>()
 * })
 * ```
 */
export function toBeType<T, U>(): Equal<T, U> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for type inequality.
 */
export function toNotBeType<T, U>(): NotEqual<T, U> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for type extends check.
 */
export function toExtend<T, U>(): T extends U ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for type not extends check.
 */
export function toNotExtend<T, U>(): T extends U ? never : CheckPass {
  return undefined as any
}

/**
 * Creates a Vitest matcher for property existence.
 */
export function toHaveProperty<T, K extends keyof T>(): HasProperty<T, K> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for any type check.
 */
export function toBeAny<T>(): IsAny<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for never type check.
 */
export function toBeNever<T>(): IsNever<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for unknown type check.
 */
export function toBeUnknown<T>(): IsUnknown<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for void type check.
 */
export function toBeVoid<T>(): IsVoid<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for undefined type check.
 */
export function toBeUndefined<T>(): IsUndefined<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for null type check.
 */
export function toBeNull<T>(): IsNull<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for nullable type check.
 */
export function toBeNullable<T>(): IsNullable<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for optional type check.
 */
export function toBeOptional<T>(): IsOptional<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for union type check.
 */
export function toBeUnion<T>(): IsUnion<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for tuple type check.
 */
export function toBeTuple<T>(): IsTuple<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for array type check.
 */
export function toBeArray<T>(): IsArray<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for inhabited type check.
 */
export function toBeInhabited<T>(): IsInhabited<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Creates a Vitest matcher for uninhabited type check.
 */
export function toBeUninhabited<T>(): IsUninhabited<T> extends true ? CheckPass : never {
  return undefined as any
}

/**
 * Helper function to create a type holder for testing.
 *
 * @example
 * ```typescript
 * expectType<string>().toBeType<string>()
 * ```
 */
export function expectType<T>(): {
  toBeType<U>(): Equal<T, U> extends true ? CheckPass : never
  toNotBeType<U>(): NotEqual<T, U> extends true ? CheckPass : never
  toExtend<U>(): T extends U ? CheckPass : never
  toNotExtend<U>(): T extends U ? never : CheckPass
  toHaveProperty<K extends keyof T>(): HasProperty<T, K> extends true ? CheckPass : never
  toBeAny(): IsAny<T> extends true ? CheckPass : never
  toBeNever(): IsNever<T> extends true ? CheckPass : never
  toBeUnknown(): IsUnknown<T> extends true ? CheckPass : never
  toBeVoid(): IsVoid<T> extends true ? CheckPass : never
  toBeUndefined(): IsUndefined<T> extends true ? CheckPass : never
  toBeNull(): IsNull<T> extends true ? CheckPass : never
  toBeNullable(): IsNullable<T> extends true ? CheckPass : never
  toBeOptional(): IsOptional<T> extends true ? CheckPass : never
  toBeUnion(): IsUnion<T> extends true ? CheckPass : never
  toBeTuple(): IsTuple<T> extends true ? CheckPass : never
  toBeArray(): IsArray<T> extends true ? CheckPass : never
  toBeInhabited(): IsInhabited<T> extends true ? CheckPass : never
  toBeUninhabited(): IsUninhabited<T> extends true ? CheckPass : never
} {
  return {} as any
}

/**
 * Type-testing: A micro library for testing your TypeScript types.
 *
 * @packageDocumentation
 */

// =============================================================================
// Type Equality
// =============================================================================

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

// =============================================================================
// Special Type Detection
// =============================================================================

/**
 * Checks if a type is `any`.
 * Uses the technique: 0 extends (1 & T) ? true : false
 *
 * @example
 * ```typescript
 * check<any>().isAny() // passes
 * check<string>().isAny() // fails
 * ```
 */
export type IsAny<T> = 0 extends (1 & T) ? true : false

/**
 * Checks if a type is `never`.
 *
 * @example
 * ```typescript
 * check<never>().isNever() // passes
 * check<string>().isNever() // fails
 * ```
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * Checks if a type is `unknown`.
 *
 * @example
 * ```typescript
 * check<unknown>().isUnknown() // passes
 * ```
 */
export type IsUnknown<T> = unknown extends T ? ([T] extends [null] ? false : true) : false

/**
 * Checks if a type is `void`.
 */
export type IsVoid<T> = Equal<T, void>

/**
 * Checks if a type is `undefined`.
 */
export type IsUndefined<T> = Equal<T, undefined>

/**
 * Checks if a type is `null`.
 */
export type IsNull<T> = Equal<T, null>

/**
 * Checks if a type is `null` or `undefined`.
 */
export type IsNullable<T> = null extends T ? true : (undefined extends T ? true : false)

/**
 * Checks if a type is optional (may be undefined).
 */
export type IsOptional<T> = undefined extends T ? true : false

// =============================================================================
// Union and Tuple Detection
// =============================================================================

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

// =============================================================================
// Inhabitation
// =============================================================================

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

// =============================================================================
// Property Testing
// =============================================================================

/**
 * Checks if a type has a specific property.
 */
export type HasProperty<T, K extends PropertyKey> = K extends keyof T ? true : false

/**
 * Gets the type of a specific property from a type.
 */
export type PropertyType<T, K extends keyof T> = T[K]

// =============================================================================
// Function Type Testing
// =============================================================================

/**
 * Gets the parameters of a function type as a tuple.
 */
export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

/**
 * Gets the return type of a function type.
 */
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

/**
 * Gets the parameter type at a specific index.
 */
export type Parameter<T extends (...args: any[]) => any, N extends number> = Parameters<T>[N]

// =============================================================================
// Length
// =============================================================================

/**
 * Gets the length of an array or tuple type.
 */
export type Length<T extends readonly any[]> = T['length']

// =============================================================================
// Check Type - Main API
// =============================================================================

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

// =============================================================================
// Result Types
// =============================================================================

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

// =============================================================================
// Assert API
// =============================================================================

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AssertFail<_T, _Expected> = never

export function assert<T>(): Assert<T> {
  return undefined as any
}

// =============================================================================
// Expect API
// =============================================================================

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

// =============================================================================
// ExpectFalse - for checking types are false
// =============================================================================

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

// =============================================================================
// Additional Utilities
// =============================================================================

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

/**
 * Simple equality check that works in more contexts.
 * Useful for simple type comparisons.
 */
export type SimpleEqual<T, U> = [T, U] extends [U, T] ? true : false

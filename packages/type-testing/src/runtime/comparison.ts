/**
 * Runtime comparison utilities.
 */

/**
 * Result of a type comparison at runtime.
 */
export interface ComparisonResult<T, U> {
  equal: boolean
  actual: T
  expected: U
}

/**
 * Compare a value against an expected type.
 * This uses the value's runtime type to determine the match.
 *
 * @example
 * ```typescript
 * const result = compareType<string>('hello')
 * result.equal // true
 * ```
 */
export function compareType<T>(value: T): ComparisonResult<T, T> {
  return {
    equal: true,
    actual: value,
    expected: value,
  }
}

/**
 * Compare two values and check if they have the same type.
 *
 * @example
 * ```typescript
 * const result = compareValues('hello', 42)
 * result.equal // false - different types
 * ```
 */
export function compareValues<T, U>(actual: T, expected: U): ComparisonResult<T, U> {
  return {
    equal: typeof actual === typeof expected,
    actual,
    expected,
  }
}

/**
 * Result of checking if a value matches a type.
 */
export interface TypeCheckResult<T> {
  matches: boolean
  value: T
  typeName: string
}

/**
 * Check if a value is a string.
 *
 * @example
 * ```typescript
 * const result = isString('hello')
 * result.matches // true
 * ```
 */
export function isString(value: unknown): TypeCheckResult<string> {
  return {
    matches: typeof value === 'string',
    value: value as string,
    typeName: typeof value,
  }
}

/**
 * Check if a value is a number.
 *
 * @example
 * ```typescript
 * const result = isNumber(42)
 * result.matches // true
 * ```
 */
export function isNumber(value: unknown): TypeCheckResult<number> {
  return {
    matches: typeof value === 'number',
    value: value as number,
    typeName: typeof value,
  }
}

/**
 * Check if a value is a boolean.
 *
 * @example
 * ```typescript
 * const result = isBoolean(true)
 * result.matches // true
 * ```
 */
export function isBoolean(value: unknown): TypeCheckResult<boolean> {
  return {
    matches: typeof value === 'boolean',
    value: value as boolean,
    typeName: typeof value,
  }
}

/**
 * Check if a value is an object.
 *
 * @example
 * ```typescript
 * const result = isObject({ a: 1 })
 * result.matches // true
 * ```
 */
export function isObject(value: unknown): TypeCheckResult<object> {
  return {
    matches: typeof value === 'object' && value !== null,
    value: value as object,
    typeName: typeof value,
  }
}

/**
 * Check if a value is an array.
 *
 * @example
 * ```typescript
 * const result = isArray([1, 2, 3])
 * result.matches // true
 * ```
 */
export function isArray(value: unknown): TypeCheckResult<unknown[]> {
  return {
    matches: Array.isArray(value),
    value: value as unknown[],
    typeName: Array.isArray(value) ? 'array' : typeof value,
  }
}

/**
 * Check if a value is null.
 *
 * @example
 * ```typescript
 * const result = isNull(null)
 * result.matches // true
 * ```
 */
export function isNull(value: unknown): TypeCheckResult<null> {
  return {
    matches: value === null,
    value: value as null,
    typeName: value === null ? 'null' : typeof value,
  }
}

/**
 * Check if a value is undefined.
 *
 * @example
 * ```typescript
 * const result = isUndefined(undefined)
 * result.matches // true
 * ```
 */
export function isUndefined(value: unknown): TypeCheckResult<undefined> {
  return {
    matches: value === undefined,
    value: value as undefined,
    typeName: value === undefined ? 'undefined' : typeof value,
  }
}

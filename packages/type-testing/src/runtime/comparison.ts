/**
 * Runtime comparison utilities.
 */

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

// ============================================
// Simple boolean type guards
// ============================================

/**
 * Type guard that returns true if the value is a string.
 */
export function isStringGuard(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Type guard that returns true if the value is a number.
 */
export function isNumberGuard(value: unknown): value is number {
  return typeof value === 'number'
}

/**
 * Type guard that returns true if the value is a boolean.
 */
export function isBooleanGuard(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Type guard that returns true if the value is an object (not null, not array).
 */
export function isObjectGuard(value: unknown): value is object {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Type guard that returns true if the value is an array.
 */
export function isArrayGuard(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

/**
 * Type guard that returns true if the value is null.
 */
export function isNullGuard(value: unknown): value is null {
  return value === null
}

/**
 * Type guard that returns true if the value is undefined.
 */
export function isUndefinedGuard(value: unknown): value is undefined {
  return value === undefined
}

/**
 * Type guard that returns true if the value is a symbol.
 */
export function isSymbolGuard(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

/**
 * Type guard that returns true if the value is a bigint.
 */
export function isBigIntGuard(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

/**
 * Type guard that returns true if the value is a function.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunctionGuard(value: unknown): value is Function {
  return typeof value === 'function'
}

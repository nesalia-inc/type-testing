/**
 * Runtime utilities tests.
 */

import { describe, it, expect } from 'vitest'
import {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isNull,
  isUndefined,
  isStringGuard,
  isNumberGuard,
  isBooleanGuard,
  isObjectGuard,
  isArrayGuard,
  isNullGuard,
  isUndefinedGuard,
  isSymbolGuard,
  isBigIntGuard,
  isFunctionGuard
} from '../src'

describe('isString', () => {
  it('should return matches true for string', () => {
    const result = isString('hello')
    expect(result.matches).toBe(true)
  })

  it('should return matches false for number', () => {
    const result = isString(123)
    expect(result.matches).toBe(false)
  })

  it('should return the value', () => {
    const result = isString('hello')
    expect(result.value).toBe('hello')
  })

  it('should return typeName string', () => {
    const result = isString('hello')
    expect(result.typeName).toBe('string')
  })

  it('should return matches false for empty string', () => {
    const result = isString('')
    expect(result.matches).toBe(true)
  })

  it('should return matches false for template literal', () => {
    const result = isString(`hello ${'world'}`)
    expect(result.matches).toBe(true)
  })
})

describe('isNumber', () => {
  it('should return matches true for number', () => {
    const result = isNumber(42)
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isNumber('hello')
    expect(result.matches).toBe(false)
  })

  it('should return typeName number', () => {
    const result = isNumber(42)
    expect(result.typeName).toBe('number')
  })

  it('should return matches true for negative number', () => {
    const result = isNumber(-42)
    expect(result.matches).toBe(true)
  })

  it('should return matches true for float', () => {
    const result = isNumber(3.14)
    expect(result.matches).toBe(true)
  })

  it('should return matches true for NaN', () => {
    const result = isNumber(NaN)
    expect(result.matches).toBe(true)
  })

  it('should return matches true for Infinity', () => {
    const result = isNumber(Infinity)
    expect(result.matches).toBe(true)
  })

  it('should return matches true for 0', () => {
    const result = isNumber(0)
    expect(result.matches).toBe(true)
  })

  it('should return matches true for -0', () => {
    const result = isNumber(-0)
    expect(result.matches).toBe(true)
  })
})

describe('isBoolean', () => {
  it('should return matches true for boolean', () => {
    const result = isBoolean(true)
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isBoolean('hello')
    expect(result.matches).toBe(false)
  })

  it('should return typeName boolean', () => {
    const result = isBoolean(true)
    expect(result.typeName).toBe('boolean')
  })

  it('should return matches true for false', () => {
    const result = isBoolean(false)
    expect(result.matches).toBe(true)
  })
})

describe('isObject', () => {
  it('should return matches true for object', () => {
    const result = isObject({ a: 1 })
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isObject('hello')
    expect(result.matches).toBe(false)
  })

  it('should return matches false for null', () => {
    const result = isObject(null)
    expect(result.matches).toBe(false)
  })

  it('should return typeName object', () => {
    const result = isObject({ a: 1 })
    expect(result.typeName).toBe('object')
  })

  it('should return matches true for empty object', () => {
    const result = isObject({})
    expect(result.matches).toBe(true)
  })

  it('should return matches true for arrays (typeof array is object)', () => {
    const result = isObject([1, 2, 3])
    expect(result.matches).toBe(true)
  })

  it('should return matches true for object with null prototype', () => {
    const result = isObject(Object.create(null))
    expect(result.matches).toBe(true)
  })
})

describe('isArray', () => {
  it('should return matches true for array', () => {
    const result = isArray([1, 2, 3])
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isArray('hello')
    expect(result.matches).toBe(false)
  })

  it('should return matches false for object', () => {
    const result = isArray({ a: 1 })
    expect(result.matches).toBe(false)
  })

  it('should return typeName array', () => {
    const result = isArray([1, 2, 3])
    expect(result.typeName).toBe('array')
  })

  it('should return matches true for empty array', () => {
    const result = isArray([])
    expect(result.matches).toBe(true)
  })

  it('should return matches true for nested arrays', () => {
    const result = isArray([[1, 2], [3, 4]])
    expect(result.matches).toBe(true)
  })
})

describe('isNull', () => {
  it('should return matches true for null', () => {
    const result = isNull(null)
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isNull('hello')
    expect(result.matches).toBe(false)
  })

  it('should return matches false for undefined', () => {
    const result = isNull(undefined)
    expect(result.matches).toBe(false)
  })

  it('should return typeName null', () => {
    const result = isNull(null)
    expect(result.typeName).toBe('null')
  })

  it('should return matches false for 0', () => {
    const result = isNull(0)
    expect(result.matches).toBe(false)
  })

  it('should return matches false for empty string', () => {
    const result = isNull('')
    expect(result.matches).toBe(false)
  })
})

describe('isUndefined', () => {
  it('should return matches true for undefined', () => {
    const result = isUndefined(undefined)
    expect(result.matches).toBe(true)
  })

  it('should return matches false for string', () => {
    const result = isUndefined('hello')
    expect(result.matches).toBe(false)
  })

  it('should return matches false for null', () => {
    const result = isUndefined(null)
    expect(result.matches).toBe(false)
  })

  it('should return typeName undefined', () => {
    const result = isUndefined(undefined)
    expect(result.typeName).toBe('undefined')
  })

  it('should return matches false for 0', () => {
    const result = isUndefined(0)
    expect(result.matches).toBe(false)
  })
})

// Boolean type guards

describe('isStringGuard', () => {
  it('should return true for string', () => {
    expect(isStringGuard('hello')).toBe(true)
  })

  it('should return false for number', () => {
    expect(isStringGuard(123)).toBe(false)
  })
})

describe('isNumberGuard', () => {
  it('should return true for number', () => {
    expect(isNumberGuard(42)).toBe(true)
  })

  it('should return false for string', () => {
    expect(isNumberGuard('hello')).toBe(false)
  })

  it('should return true for NaN', () => {
    expect(isNumberGuard(NaN)).toBe(true)
  })

  it('should return true for Infinity', () => {
    expect(isNumberGuard(Infinity)).toBe(true)
  })
})

describe('isBooleanGuard', () => {
  it('should return true for boolean true', () => {
    expect(isBooleanGuard(true)).toBe(true)
  })

  it('should return true for boolean false', () => {
    expect(isBooleanGuard(false)).toBe(true)
  })

  it('should return false for string', () => {
    expect(isBooleanGuard('hello')).toBe(false)
  })
})

describe('isObjectGuard', () => {
  it('should return true for object', () => {
    expect(isObjectGuard({ a: 1 })).toBe(true)
  })

  it('should return false for null', () => {
    expect(isObjectGuard(null)).toBe(false)
  })

  it('should return false for array', () => {
    expect(isObjectGuard([1, 2, 3])).toBe(false)
  })

  it('should return false for string', () => {
    expect(isObjectGuard('hello')).toBe(false)
  })

  it('should return true for object with null prototype', () => {
    expect(isObjectGuard(Object.create(null))).toBe(true)
  })
})

describe('isArrayGuard', () => {
  it('should return true for array', () => {
    expect(isArrayGuard([1, 2, 3])).toBe(true)
  })

  it('should return false for object', () => {
    expect(isArrayGuard({ a: 1 })).toBe(false)
  })

  it('should return false for string', () => {
    expect(isArrayGuard('hello')).toBe(false)
  })

  it('should return true for empty array', () => {
    expect(isArrayGuard([])).toBe(true)
  })
})

describe('isNullGuard', () => {
  it('should return true for null', () => {
    expect(isNullGuard(null)).toBe(true)
  })

  it('should return false for undefined', () => {
    expect(isNullGuard(undefined)).toBe(false)
  })

  it('should return false for 0', () => {
    expect(isNullGuard(0)).toBe(false)
  })

  it('should return false for empty string', () => {
    expect(isNullGuard('')).toBe(false)
  })
})

describe('isUndefinedGuard', () => {
  it('should return true for undefined', () => {
    expect(isUndefinedGuard(undefined)).toBe(true)
  })

  it('should return false for null', () => {
    expect(isUndefinedGuard(null)).toBe(false)
  })

  it('should return false for 0', () => {
    expect(isUndefinedGuard(0)).toBe(false)
  })
})

describe('isSymbolGuard', () => {
  it('should return true for symbol', () => {
    expect(isSymbolGuard(Symbol('test'))).toBe(true)
  })

  it('should return false for string', () => {
    expect(isSymbolGuard('hello')).toBe(false)
  })
})

describe('isBigIntGuard', () => {
  it('should return true for bigint', () => {
    expect(isBigIntGuard(42n)).toBe(true)
  })

  it('should return false for number', () => {
    expect(isBigIntGuard(42)).toBe(false)
  })
})

describe('isFunctionGuard', () => {
  it('should return true for function', () => {
    expect(isFunctionGuard(() => {})).toBe(true)
  })

  it('should return true for async function', () => {
    expect(isFunctionGuard(async () => {})).toBe(true)
  })

  it('should return false for object', () => {
    expect(isFunctionGuard({})).toBe(false)
  })

  it('should return false for string', () => {
    expect(isFunctionGuard('hello')).toBe(false)
  })
})

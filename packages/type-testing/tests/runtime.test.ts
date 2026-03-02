/**
 * Runtime utilities tests.
 */

import { describe, it, expect } from 'vitest'
import {
  compareType,
  compareValues,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isNull,
  isUndefined
} from '../src'

describe('compareType', () => {
  it('should return equal true with value', () => {
    const result = compareType('hello')
    expect(result.equal).toBe(true)
  })

  it('should include actual value', () => {
    const result = compareType('hello')
    expect(result.actual).toBe('hello')
  })

  it('should include expected value', () => {
    const result = compareType('hello')
    expect(result.expected).toBe('hello')
  })
})

describe('compareValues', () => {
  it('should return equal true for same type values', () => {
    const result = compareValues('hello', 'world')
    expect(result.equal).toBe(true)
  })

  it('should return equal false for different type values', () => {
    const result = compareValues('hello', 42)
    expect(result.equal).toBe(false)
  })

  it('should return actual value', () => {
    const result = compareValues('hello', 'world')
    expect(result.actual).toBe('hello')
  })

  it('should return expected value', () => {
    const result = compareValues('hello', 'world')
    expect(result.expected).toBe('world')
  })
})

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
})

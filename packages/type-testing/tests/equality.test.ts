/**
 * Type equality tests.
 */

import { describe, it } from 'vitest'
import { Equal, NotEqual, SimpleEqual, IsNeverEqual } from '../src'

describe('Equal', () => {
  it('should detect equal types', () => {
    type Test = Equal<string, string>
    const _test: Test = true
  })

  it('should detect unequal types', () => {
    type Test = Equal<string, number>
    const _test: Test = false
  })

  it('should handle any', () => {
    type Test = Equal<any, any>
    const _test: Test = true
  })

  it('should handle never', () => {
    type Test = Equal<never, never>
    const _test: Test = true
  })

  it('should handle object types', () => {
    type Test = Equal<{ a: string }, { a: string }>
    const _test: Test = true
  })
})

describe('NotEqual', () => {
  it('should detect unequal types', () => {
    type Test = NotEqual<string, number>
    const _test: Test = true
  })

  it('should detect equal types', () => {
    type Test = NotEqual<string, string>
    const _test: Test = false
  })
})

describe('SimpleEqual', () => {
  it('should detect equal types', () => {
    type Test = SimpleEqual<string, string>
    const _test: Test = true
  })

  it('should detect unequal types', () => {
    type Test = SimpleEqual<string, number>
    const _test: Test = false
  })
})

describe('IsNeverEqual', () => {
  it('should detect both types as never', () => {
    type Test = IsNeverEqual<never, never>
    const _test: Test = true
  })

  it('should not detect first type as never when second is not', () => {
    type Test = IsNeverEqual<never, string>
    const _test: Test = false
  })

  it('should not detect second type as never when first is not', () => {
    type Test = IsNeverEqual<string, never>
    const _test: Test = false
  })

  it('should not detect when neither is never', () => {
    type Test = IsNeverEqual<string, number>
    const _test: Test = false
  })

  it('should not detect any as never', () => {
    type Test = IsNeverEqual<any, any>
    const _test: Test = false
  })
})

/**
 * Union and tuple detection tests.
 */

import { describe, it } from 'vitest'
import { IsUnion, IsTuple, IsArray } from '../src'

describe('IsUnion', () => {
  it('should detect unions', () => {
    type Test = IsUnion<'a' | 'b'>
    const _test: Test = true
  })

  it('should detect union with never', () => {
    // Note: string | never simplifies to string in TypeScript (never is bottom type)
    type Test = IsUnion<string | never>
    const _test: Test = false
  })

  it('should not detect single type as union', () => {
    type Test = IsUnion<'a'>
    const _test: Test = false
  })

  it('should not detect primitives as union', () => {
    type Test = IsUnion<string>
    const _test: Test = false
  })
})

describe('IsTuple', () => {
  it('should detect tuples', () => {
    type Test = IsTuple<[string, number]>
    const _test: Test = true
  })

  it('should detect empty tuple', () => {
    type Test = IsTuple<[]>
    const _test: Test = true
  })

  it('should not detect arrays as tuples', () => {
    type Test = IsTuple<string[]>
    const _test: Test = false
  })
})

describe('IsArray', () => {
  it('should detect arrays', () => {
    type Test = IsArray<string[]>
    const _test: Test = true
  })

  it('should not detect tuples as arrays', () => {
    type Test = IsArray<[string]>
    const _test: Test = false
  })
})

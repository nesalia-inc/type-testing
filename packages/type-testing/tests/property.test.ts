/**
 * Property testing tests.
 */

import { describe, it } from 'vitest'
import { HasProperty, PropertyType } from '../src'

describe('HasProperty', () => {
  it('should detect existing property', () => {
    type Test = HasProperty<{ a: string }, 'a'>
    const _test: Test = true
  })

  it('should detect multiple properties', () => {
    type Test = HasProperty<{ a: string; b: number }, 'b'>
    const _test: Test = true
  })

  it('should not detect missing property', () => {
    type Test = HasProperty<{ a: string }, 'b'>
    const _test: Test = false
  })

  it('should work with optional properties', () => {
    type Test = HasProperty<{ a?: string }, 'a'>
    const _test: Test = true
  })
})

describe('PropertyType', () => {
  it('should get property type', () => {
    type Test = PropertyType<{ a: string }, 'a'>
    const _test: Test = 'hello'
  })
})

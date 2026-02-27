/**
 * Type inhabitation tests.
 */

import { describe, it } from 'vitest'
import { IsInhabited, IsUninhabited } from '../src'

describe('IsInhabited', () => {
  it('should detect inhabited types', () => {
    type Test = IsInhabited<string>
    const _test: Test = true
  })

  it('should detect object types as inhabited', () => {
    type Test = IsInhabited<{ a: string }>
    const _test: Test = true
  })

  it('should not detect never as inhabited', () => {
    type Test = IsInhabited<never>
    const _test: Test = false
  })
})

describe('IsUninhabited', () => {
  it('should detect uninhabited types', () => {
    type Test = IsUninhabited<never>
    const _test: Test = true
  })

  it('should not detect string as uninhabited', () => {
    type Test = IsUninhabited<string>
    const _test: Test = false
  })

  it('should not detect any as uninhabited', () => {
    type Test = IsUninhabited<any>
    const _test: Test = false
  })
})

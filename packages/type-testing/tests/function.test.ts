/**
 * Function type tests.
 */

import { describe, it } from 'vitest'
import { Parameters, ReturnType, Parameter } from '../src'

describe('Parameters', () => {
  it('should get function parameters', () => {
    type Test = Parameters<(a: string, b: number) => void>
    const _test: Test = ['hello', 42]
  })
})

describe('ReturnType', () => {
  it('should get function return type', () => {
    type Test = ReturnType<(a: string) => number>
    const _test: Test = 42
  })
})

describe('Parameter', () => {
  it('should get parameter at index 0', () => {
    type Test = Parameter<(a: string, b: number) => void, 0>
    const _test: Test = 'hello'
  })

  it('should get parameter at index 1', () => {
    type Test = Parameter<(a: string, b: number) => void, 1>
    const _test: Test = 42
  })
})

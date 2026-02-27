/**
 * Utility tests.
 */

import { describe, it } from 'vitest'
import { ExpectTrue, ExpectEqual } from '../src'

describe('ExpectTrue', () => {
  it('should pass for true', () => {
    type Test = ExpectTrue<true>
    const _test: Test = true
  })
})

describe('ExpectEqual', () => {
  it('should work with equal types', () => {
    type Test = ExpectEqual<string, string>
    const _test: string = {} as Test
  })
})

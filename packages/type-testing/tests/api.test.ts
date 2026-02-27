/**
 * API tests.
 *
 * These tests verify that the type-checking APIs compile correctly.
 * The actual type tests are done at compile time.
 */

import { describe, it, expect } from 'vitest'
import { check, assert, expect as expectFn, expectFalse } from '../src'

describe('check() API', () => {
  it('should create check interface', () => {
    const c = check<string>()
    // Functions return undefined at runtime, but types are checked at compile time
    expect(c).toBeUndefined()
  })
})

describe('assert() API', () => {
  it('should create assert interface', () => {
    const a = assert<string>()
    expect(a).toBeUndefined()
  })
})

describe('expect() API', () => {
  it('should create expect interface', () => {
    const e = expectFn<string, string>()
    expect(e).toBeUndefined()
  })
})

describe('expectFalse', () => {
  it('should compile for false', () => {
    // If this compiles, expectFalse works at compile time
    expectFalse<false>()
    // Function returns void at runtime
    expect(expectFalse<false>()).toBeUndefined()
  })
})

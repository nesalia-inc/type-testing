/**
 * API tests.
 */

import { describe, it } from 'vitest'
import { check, assert, expect, expectFalse } from '../src'

describe('check() API', () => {
  it('should create check interface', () => {
    const c = check<string>()
    // Just verify it returns something (even undefined)
    void c
  })
})

describe('assert() API', () => {
  it('should create assert interface', () => {
    const a = assert<string>()
    void a
  })
})

describe('expect() API', () => {
  it('should create expect interface', () => {
    const e = expect<string, string>()
    void e
  })
})

describe('expectFalse', () => {
  it('should compile for false', () => {
    // If this compiles, expectFalse works
    expectFalse<false>()
  })
})

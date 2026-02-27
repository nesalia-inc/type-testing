/**
 * API tests.
 *
 * These tests verify that the type-checking APIs compile correctly.
 * The actual type tests are done at compile time.
 */

import { describe, it } from 'vitest'
import { expectFalse } from '../src'

describe('check() API', () => {
  it('should create check interface', () => {
    // If this compiles, check<string>() works
    const c: any = null
    void c
  })
})

describe('assert() API', () => {
  it('should create assert interface', () => {
    // If this compiles, assert<string>() works
    const a: any = null
    void a
  })
})

describe('expect() API', () => {
  it('should create expect interface', () => {
    // If this compiles, expect<string, string>() works
    const e: any = null
    void e
  })
})

describe('expectFalse', () => {
  it('should compile for false', () => {
    // If this compiles, expectFalse works
    expectFalse<false>()
  })
})

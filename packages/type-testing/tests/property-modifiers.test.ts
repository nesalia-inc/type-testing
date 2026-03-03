/**
 * Property modifier tests.
 */

import { describe, it } from 'vitest'
import { IsReadonly, IsRequired, IsPublic, IsPrivate, IsProtected } from '../src'

describe('IsReadonly', () => {
  it('should detect readonly properties', () => {
    type Test = IsReadonly<{ readonly a: string }>
    const _test: Test = true
  })

  it('should detect all readonly properties', () => {
    type Test = IsReadonly<{ readonly a: string; readonly b: number }>
    const _test: Test = true
  })

  it('should not detect mutable properties as readonly', () => {
    type Test = IsReadonly<{ a: string }>
    const _test: Test = false
  })

  it('should not detect mixed properties as readonly', () => {
    type Test = IsReadonly<{ readonly a: string; b: number }>
    const _test: Test = false
  })

  it('should detect empty object as readonly', () => {
    type Test = IsReadonly<{}>
    const _test: Test = true
  })
})

describe('IsRequired', () => {
  it('should detect required properties', () => {
    type Test = IsRequired<{ a: string }>
    const _test: Test = true
  })

  it('should detect all required properties', () => {
    type Test = IsRequired<{ a: string; b: number }>
    const _test: Test = true
  })

  it('should not detect optional properties as required', () => {
    type Test = IsRequired<{ a?: string }>
    const _test: Test = false
  })

  it('should not detect mixed properties as required', () => {
    type Test = IsRequired<{ a: string; b?: number }>
    const _test: Test = false
  })

  it('should detect empty object as required', () => {
    type Test = IsRequired<{}>
    const _test: Test = true
  })
})

describe('IsPublic', () => {
  it('should detect public properties', () => {
    type Test = IsPublic<{ a: string }, 'a'>
    const _test: Test = true
  })

  it('should detect multiple public properties', () => {
    type Test = IsPublic<{ a: string; b: number }, 'b'>
    const _test: Test = true
  })

  it('should not detect private properties as public', () => {
    type Test = IsPublic<{ __private: string }, '__private'>
    const _test: Test = false
  })

  it('should not detect protected properties as public', () => {
    type Test = IsPublic<{ _protected: string }, '_protected'>
    const _test: Test = false
  })

  it('should return false for non-existent properties', () => {
    type Test = IsPublic<{ a: string }, 'b'>
    const _test: Test = false
  })
})

describe('IsPrivate', () => {
  it('should detect private properties', () => {
    type Test = IsPrivate<{ __private: string }, '__private'>
    const _test: Test = true
  })

  it('should not detect public properties as private', () => {
    type Test = IsPrivate<{ a: string }, 'a'>
    const _test: Test = false
  })

  it('should not detect protected properties as private', () => {
    type Test = IsPrivate<{ _protected: string }, '_protected'>
    const _test: Test = false
  })

  it('should return false for non-existent properties', () => {
    type Test = IsPrivate<{ a: string }, 'b'>
    const _test: Test = false
  })
})

describe('IsProtected', () => {
  it('should detect protected properties', () => {
    type Test = IsProtected<{ _protected: string }, '_protected'>
    const _test: Test = true
  })

  it('should detect multiple protected properties', () => {
    type Test = IsProtected<{ _a: string; _b: number }, '_b'>
    const _test: Test = true
  })

  it('should not detect public properties as protected', () => {
    type Test = IsProtected<{ a: string }, 'a'>
    const _test: Test = false
  })

  it('should not detect private properties as protected', () => {
    type Test = IsProtected<{ __private: string }, '__private'>
    const _test: Test = false
  })

  it('should return false for non-existent properties', () => {
    type Test = IsProtected<{ a: string }, 'b'>
    const _test: Test = false
  })
})

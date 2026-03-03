/**
 * Deep type manipulation tests.
 */

import { describe, it } from 'vitest'
import { DeepReadonly, DeepPartial, RequiredKeys, OptionalKeys } from '../src'

describe('DeepReadonly', () => {
  it('should make simple type readonly', () => {
    type Test = DeepReadonly<{ a: string }>
    const _test: { readonly a: string } = {} as Test
  })

  it('should make nested properties readonly', () => {
    type Test = DeepReadonly<{ a: string; b: { c: number } }>
    const _test: { readonly a: string; readonly b: { readonly c: number } } = {} as Test
  })

  it('should handle arrays recursively', () => {
    type Test = DeepReadonly<{ items: { name: string }[] }>
    const _test: { readonly items: readonly { readonly name: string }[] } = {} as Test
  })

  it('should handle empty objects', () => {
    type Test = DeepReadonly<{}>
    const _test: {} = {} as Test
  })

  it('should handle primitive types', () => {
    type Test = DeepReadonly<string>
    const _test: string = '' as Test
  })
})

describe('DeepPartial', () => {
  it('should make simple type optional', () => {
    type Test = DeepPartial<{ a: string }>
    const _test: { a?: string | undefined } = {} as Test
  })

  it('should make nested properties optional', () => {
    type Test = DeepPartial<{ a: string; b: { c: number } }>
    const _test: { a?: string | undefined; b?: { c?: number | undefined } | undefined } = {} as Test
  })

  it('should handle arrays recursively', () => {
    type Test = DeepPartial<{ items: { name: string }[] }>
    const _test: { items?: { name?: string | undefined }[] | undefined } = {} as Test
  })

  it('should handle empty objects', () => {
    type Test = DeepPartial<{}>
    const _test: {} = {} as Test
  })
})

describe('RequiredKeys', () => {
  it('should get required keys', () => {
    type Test = RequiredKeys<{ a: string; b?: number }>
    const _test: Test = 'a'
  })

  it('should get all keys when all are required', () => {
    type Test = RequiredKeys<{ a: string; b: number }>
    const _test: Test = 'a' | 'b'
  })

  it('should return never for all optional', () => {
    // TypeScript compile-time check: Test should be never
    type Test = RequiredKeys<{ a?: string; b?: number }>
    const _ensureNever: Test extends never ? true : false = true
  })

  it('should handle empty object', () => {
    // TypeScript compile-time check: Test should be never
    type Test = RequiredKeys<{}>
    const _ensureNever: Test extends never ? true : false = true
  })
})

describe('OptionalKeys', () => {
  it('should get optional keys', () => {
    type Test = OptionalKeys<{ a: string; b?: number }>
    const _test: Test = 'b'
  })

  it('should get all keys when all are optional', () => {
    type Test = OptionalKeys<{ a?: string; b?: number }>
    const _test: Test = 'a' | 'b'
  })

  it('should return never for all required', () => {
    // TypeScript compile-time check: Test should be never
    type Test = OptionalKeys<{ a: string; b: number }>
    const _ensureNever: Test extends never ? true : false = true
  })

  it('should handle empty object', () => {
    // TypeScript compile-time check: Test should be never
    type Test = OptionalKeys<{}>
    const _ensureNever: Test extends never ? true : false = true
  })
})

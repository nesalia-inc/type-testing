/**
 * Vitest integration tests.
 */

import { describe, it, expect } from 'vitest'
import {
  toBeType,
  toNotBeType,
  toExtend,
  toNotExtend,
  toHaveProperty,
  toBeAny,
  toBeNever,
  toBeUnknown,
  toBeVoid,
  toBeUndefined,
  toBeNull,
  toBeNullable,
  toBeOptional,
  toBeUnion,
  toBeTuple,
  toBeArray,
  toBeInhabited,
  toBeUninhabited,
  expectType as exportedExpectType
} from '../src/vitest'

describe('Vitest matchers runtime', () => {
  describe('toBeType', () => {
    it('should be callable at runtime', () => {
      const result = toBeType<string, string>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeType<string, string>
      const _test: Test = true
    })
  })

  describe('toNotBeType', () => {
    it('should be callable at runtime', () => {
      const result = toNotBeType<string, number>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toNotBeType<string, number>
      const _test: Test = true
    })
  })

  describe('toExtend', () => {
    it('should be callable at runtime', () => {
      const result = toExtend<string, string>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toExtend<string, string>
      const _test: Test = true
    })
  })

  describe('toNotExtend', () => {
    it('should be callable at runtime', () => {
      const result = toNotExtend<string, number>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toNotExtend<string, number>
      const _test: Test = true
    })
  })

  describe('toHaveProperty', () => {
    it('should be callable at runtime', () => {
      const result = toHaveProperty<{ a: string }, 'a'>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toHaveProperty<{ a: string }, 'a'>
      const _test: Test = true
    })
  })

  describe('toBeAny', () => {
    it('should be callable at runtime', () => {
      const result = toBeAny<any>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeAny<any>
      const _test: Test = true
    })
  })

  describe('toBeNever', () => {
    it('should be callable at runtime', () => {
      const result = toBeNever<never>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeNever<never>
      const _test: Test = true
    })
  })

  describe('toBeUnknown', () => {
    it('should be callable at runtime', () => {
      const result = toBeUnknown<unknown>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeUnknown<unknown>
      const _test: Test = true
    })
  })

  describe('toBeVoid', () => {
    it('should be callable at runtime', () => {
      const result = toBeVoid<void>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeVoid<void>
      const _test: Test = true
    })
  })

  describe('toBeUndefined', () => {
    it('should be callable at runtime', () => {
      const result = toBeUndefined<undefined>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeUndefined<undefined>
      const _test: Test = true
    })
  })

  describe('toBeNull', () => {
    it('should be callable at runtime', () => {
      const result = toBeNull<null>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeNull<null>
      const _test: Test = true
    })
  })

  describe('toBeNullable', () => {
    it('should be callable at runtime', () => {
      const result = toBeNullable<string | null>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeNullable<string | null>
      const _test: Test = true
    })
  })

  describe('toBeOptional', () => {
    it('should be callable at runtime', () => {
      const result = toBeOptional<{ a?: string }>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeOptional<{ a?: string }>
      const _test: Test = true
    })
  })

  describe('toBeUnion', () => {
    it('should be callable at runtime', () => {
      const result = toBeUnion<string | number>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeUnion<string | number>
      const _test: Test = true
    })
  })

  describe('toBeTuple', () => {
    it('should be callable at runtime', () => {
      const result = toBeTuple<[string, number]>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeTuple<[string, number]>
      const _test: Test = true
    })
  })

  describe('toBeArray', () => {
    it('should be callable at runtime', () => {
      const result = toBeArray<string[]>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeArray<string[]>
      const _test: Test = true
    })
  })

  describe('toBeInhabited', () => {
    it('should be callable at runtime', () => {
      const result = toBeInhabited<string>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeInhabited<string>
      const _test: Test = true
    })
  })

  describe('toBeUninhabited', () => {
    it('should be callable at runtime', () => {
      const result = toBeUninhabited<never>()
      expect(result).toBeUndefined()
    })

    it('should have correct type signature', () => {
      type Test = typeof toBeUninhabited<never>
      const _test: Test = true
    })
  })

  describe('expectType', () => {
    it('should be callable at runtime', () => {
      const result = exportedExpectType<string>()
      expect(result).toBeDefined()
    })

    it('should be exported from vitest module', () => {
      const _test = exportedExpectType
    })

    it('should provide type holder with toBeType', () => {
      type Test = ReturnType<typeof exportedExpectType<string>['toBeType']>
      const _test: Test = true
    })

    it('should provide type holder with toNotBeType', () => {
      type Test = ReturnType<typeof exportedExpectType<string>['toNotBeType']>
      const _test: Test = true
    })

    it('should provide type holder with toExtend', () => {
      type Test = ReturnType<typeof exportedExpectType<string>['toExtend']>
      const _test: Test = true
    })

    it('should provide type holder with toHaveProperty', () => {
      type Test = ReturnType<typeof exportedExpectType<{ a: string }>['toHaveProperty']>
      const _test: Test = true
    })

    it('should provide type holder with toBeAny', () => {
      type Test = ReturnType<typeof exportedExpectType<any>['toBeAny']>
      const _test: Test = true
    })

    it('should provide type holder with toBeNever', () => {
      type Test = ReturnType<typeof exportedExpectType<never>['toBeNever']>
      const _test: Test = true
    })

    it('should provide type holder with toBeUnknown', () => {
      type Test = ReturnType<typeof exportedExpectType<unknown>['toBeUnknown']>
      const _test: Test = true
    })

    it('should provide type holder with toBeVoid', () => {
      type Test = ReturnType<typeof exportedExpectType<void>['toBeVoid']>
      const _test: Test = true
    })

    it('should provide type holder with toBeUndefined', () => {
      type Test = ReturnType<typeof exportedExpectType<undefined>['toBeUndefined']>
      const _test: Test = true
    })

    it('should provide type holder with toBeNull', () => {
      type Test = ReturnType<typeof exportedExpectType<null>['toBeNull']>
      const _test: Test = true
    })

    it('should provide type holder with toBeNullable', () => {
      type Test = ReturnType<typeof exportedExpectType<string | null>['toBeNullable']>
      const _test: Test = true
    })

    it('should provide type holder with toBeOptional', () => {
      type Test = ReturnType<typeof exportedExpectType<{ a?: string }>['toBeOptional']>
      const _test: Test = true
    })

    it('should provide type holder with toBeUnion', () => {
      type Test = ReturnType<typeof exportedExpectType<string | number>['toBeUnion']>
      const _test: Test = true
    })

    it('should provide type holder with toBeTuple', () => {
      type Test = ReturnType<typeof exportedExpectType<[string, number]>['toBeTuple']>
      const _test: Test = true
    })

    it('should provide type holder with toBeArray', () => {
      type Test = ReturnType<typeof exportedExpectType<string[]>['toBeArray']>
      const _test: Test = true
    })

    it('should provide type holder with toBeInhabited', () => {
      type Test = ReturnType<typeof exportedExpectType<string>['toBeInhabited']>
      const _test: Test = true
    })

    it('should provide type holder with toBeUninhabited', () => {
      type Test = ReturnType<typeof exportedExpectType<never>['toBeUninhabited']>
      const _test: Test = true
    })
  })
})

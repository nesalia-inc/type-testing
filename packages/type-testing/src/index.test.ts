/**
 * Type-testing tests
 *
 * These tests verify that the type-checking utilities compile correctly.
 * If the code compiles, the types are correct.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, it } from 'vitest'
import {
  // Main exports
  check,
  assert,
  expect,
  expectFalse,
  ExpectTrue,
  ExpectEqual,
  SimpleEqual,

  // Type equality
  Equal,
  NotEqual,

  // Special types
  IsAny,
  IsNever,
  IsUnknown,
  IsVoid,
  IsUndefined,
  IsNull,
  IsNullable,
  IsOptional,

  // Union/Tuple
  IsUnion,
  IsTuple,
  IsArray,

  // Inhabitation
  IsInhabited,
  IsUninhabited,

  // Property
  HasProperty,
  PropertyType,

  // Function
  Parameters,
  ReturnType,
  Parameter,

  // Length
  Length,
} from './index'

// These tests verify that the types compile correctly.
// The actual type tests are done at compile time.

describe('Equal', () => {
  it('should detect equal types', () => {
    // If this compiles, Equal<string, string> works
    type Test = Equal<string, string>
    const _test: Test = true
  })

  it('should detect unequal types', () => {
    type Test = Equal<string, number>
    const _test: Test = false
  })

  it('should handle any', () => {
    type Test = Equal<any, any>
    const _test: Test = true
  })

  it('should handle never', () => {
    type Test = Equal<never, never>
    const _test: Test = true
  })

  it('should handle object types', () => {
    type Test = Equal<{ a: string }, { a: string }>
    const _test: Test = true
  })
})

describe('NotEqual', () => {
  it('should detect unequal types', () => {
    type Test = NotEqual<string, number>
    const _test: Test = true
  })

  it('should detect equal types', () => {
    type Test = NotEqual<string, string>
    const _test: Test = false
  })
})

describe('IsAny', () => {
  it('should detect any', () => {
    type Test = IsAny<any>
    const _test: Test = true
  })

  it('should not detect string as any', () => {
    type Test = IsAny<string>
    const _test: Test = false
  })

  it('should not detect never as any', () => {
    type Test = IsAny<never>
    const _test: Test = false
  })

  it('should not detect unknown as any', () => {
    type Test = IsAny<unknown>
    const _test: Test = false
  })
})

describe('IsNever', () => {
  it('should detect never', () => {
    type Test = IsNever<never>
    const _test: Test = true
  })

  it('should not detect string as never', () => {
    type Test = IsNever<string>
    const _test: Test = false
  })

  it('should not detect any as never', () => {
    type Test = IsNever<any>
    const _test: Test = false
  })
})

describe('IsUnknown', () => {
  it('should detect unknown', () => {
    type Test = IsUnknown<unknown>
    const _test: Test = true
  })

  it('should not detect string as unknown', () => {
    type Test = IsUnknown<string>
    const _test: Test = false
  })
})

describe('IsVoid', () => {
  it('should detect void', () => {
    type Test = IsVoid<void>
    const _test: Test = true
  })

  it('should not detect string as void', () => {
    type Test = IsVoid<string>
    const _test: Test = false
  })
})

describe('IsUndefined', () => {
  it('should detect undefined', () => {
    type Test = IsUndefined<undefined>
    const _test: Test = true
  })

  it('should not detect string as undefined', () => {
    type Test = IsUndefined<string>
    const _test: Test = false
  })
})

describe('IsNull', () => {
  it('should detect null', () => {
    type Test = IsNull<null>
    const _test: Test = true
  })

  it('should not detect string as null', () => {
    type Test = IsNull<string>
    const _test: Test = false
  })
})

describe('IsNullable', () => {
  it('should detect nullable types with null', () => {
    type Test = IsNullable<string | null>
    const _test: Test = true
  })

  it('should detect nullable types with undefined', () => {
    type Test = IsNullable<string | undefined>
    const _test: Test = true
  })

  it('should detect fully nullable', () => {
    type Test = IsNullable<string | null | undefined>
    const _test: Test = true
  })

  it('should not detect non-nullable', () => {
    type Test = IsNullable<string>
    const _test: Test = false
  })

  it('should detect null as nullable', () => {
    type Test = IsNullable<null>
    const _test: Test = true
  })
})

describe('IsOptional', () => {
  it('should detect optional types', () => {
    type Test = IsOptional<string | undefined>
    const _test: Test = true
  })

  it('should detect required types as not optional', () => {
    type Test = IsOptional<string>
    const _test: Test = false
  })
})

describe('IsUnion', () => {
  it('should detect unions', () => {
    type Test = IsUnion<'a' | 'b'>
    const _test: Test = true
  })

  it('should detect union with never', () => {
    // Note: string | never simplifies to string in TypeScript (never is bottom type)
    type Test = IsUnion<string | never>
    const _test: Test = false
  })

  it('should not detect single type as union', () => {
    type Test = IsUnion<'a'>
    const _test: Test = false
  })

  it('should not detect primitives as union', () => {
    type Test = IsUnion<string>
    const _test: Test = false
  })
})

describe('IsTuple', () => {
  it('should detect tuples', () => {
    type Test = IsTuple<[string, number]>
    const _test: Test = true
  })

  it('should detect empty tuple', () => {
    type Test = IsTuple<[]>
    const _test: Test = true
  })

  it('should not detect arrays as tuples', () => {
    type Test = IsTuple<string[]>
    const _test: Test = false
  })
})

describe('IsArray', () => {
  it('should detect arrays', () => {
    type Test = IsArray<string[]>
    const _test: Test = true
  })

  it('should not detect tuples as arrays', () => {
    type Test = IsArray<[string]>
    const _test: Test = false
  })
})

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

describe('Length', () => {
  it('should get array length', () => {
    type Test = Length<['a', 'b', 'c']>
    const _test: Test = 3
  })

  it('should get empty array length', () => {
    type Test = Length<[]>
    const _test: Test = 0
  })
})

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

describe('SimpleEqual', () => {
  it('should detect equal types', () => {
    type Test = SimpleEqual<string, string>
    const _test: Test = true
  })

  it('should detect unequal types', () => {
    type Test = SimpleEqual<string, number>
    const _test: Test = false
  })
})

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

describe('expectFalse', () => {
  it('should compile for false', () => {
    // If this compiles, expectFalse works
    expectFalse<false>()
  })
})

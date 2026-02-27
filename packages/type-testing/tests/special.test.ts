/**
 * Special type detection tests.
 */

import { describe, it } from 'vitest'
import { IsAny, IsNever, IsUnknown, IsVoid, IsUndefined, IsNull, IsNullable, IsOptional } from '../src'

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

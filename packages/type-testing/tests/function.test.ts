/**
 * Function type tests.
 */

import { describe, it } from 'vitest'
import { Parameters, ReturnType, Parameter, IsConstructor, IsAbstract } from '../src'

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

describe('IsConstructor', () => {
  it('should detect class constructor', () => {
    class Foo {}
    type Test = IsConstructor<typeof Foo>
    const _test: Test = true
  })

  it('should detect constructor type', () => {
    type Test = IsConstructor<new () => object>
    const _test: Test = true
  })

  it('should detect constructor with parameters', () => {
    type Test = IsConstructor<new (a: string, b: number) => object>
    const _test: Test = true
  })

  it('should not detect regular function as constructor', () => {
    function foo() {}
    type Test = IsConstructor<typeof foo>
    const _test: Test = false
  })

  it('should not detect class instance as constructor', () => {
    class Foo {}
    type Test = IsConstructor<Foo>
    const _test: Test = false
  })

  it('should not detect primitive types', () => {
    type Test = IsConstructor<string>
    const _test: Test = false
  })
})

describe('IsAbstract', () => {
  it('should detect abstract class', () => {
    abstract class Foo {}
    type Test = IsAbstract<typeof Foo>
    const _test: Test = true
  })

  it('should detect abstract constructor type', () => {
    type Test = IsAbstract<abstract new () => object>
    const _test: Test = true
  })

  it('should not detect regular class as abstract', () => {
    class Foo {}
    type Test = IsAbstract<typeof Foo>
    const _test: Test = false
  })

  it('should not detect class instance as abstract', () => {
    class Foo {}
    type Test = IsAbstract<Foo>
    const _test: Test = false
  })

  it('should not detect primitive types', () => {
    type Test = IsAbstract<string>
    const _test: Test = false
  })
})

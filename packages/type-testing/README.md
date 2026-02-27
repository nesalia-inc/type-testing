# @deessejs/type-testing

A micro library for compile-time type testing in TypeScript.

## Installation

```bash
npm install @deessejs/type-testing
```

## Usage

### Type Equality

```typescript
import { Equal, NotEqual, SimpleEqual } from '@deessejs/type-testing'

// Strict equality check
type Test1 = Equal<string, string>  // true
type Test2 = Equal<string, number>   // false

// Inequality check
type Test3 = NotEqual<string, number> // true

// Simple equality
type Test4 = SimpleEqual<{ a: string }, { a: string }> // true
```

### Special Type Detection

```typescript
import { IsAny, IsNever, IsUnknown, IsNullable, IsOptional } from '@deessejs/type-testing'

IsAny<any>        // true
IsNever<never>    // true
IsUnknown<unknown> // true
IsNullable<string | null>  // true
IsOptional<string | undefined> // true
```

### Chainable API - check()

```typescript
import { check } from '@deessejs/type-testing'

// Type equals
check<string>().equals<string>()           // passes
check<string>().equals<number>()           // fails at compile time

// Type extends
check<string>().extends<string>()          // passes
check<string>().extends<any>()             // passes

// Property check
check<{ a: string }>().hasProperty('a')    // passes

// Special types
check<any>().isAny()                       // passes
check<never>().isNever()                   // passes
check<unknown>().isUnknown()               // passes

// Nullable/Optional
check<string | null>().isNullable()        // passes
check<string | undefined>().isOptional()   // passes

// Union/Tuple/Array
check<'a' | 'b'>().isUnion()              // passes
check<[string, number]>().isTuple()        // passes
check<string[]>().isArray()                // passes
```

### Chainable API - assert()

```typescript
import { assert } from '@deessejs/type-testing'

// Similar to check() but throws at compile time on failure
assert<string>().equals<string>()
assert<{ a: string }>().hasProperty('a')
```

### Chainable API - expect()

```typescript
import { expect } from '@deessejs/type-testing'

// Compare two types
expect<string, string>().toBeEqual()       // passes
expect<string, number>().toBeNotEqual()    // passes
expect<string>().toExtend<string>()        // passes
```

### Compile-time Assertions

```typescript
import { expectFalse, ExpectTrue, ExpectEqual } from '@deessejs/type-testing'

// Assert a type is false
expectFalse<IsNever<string>>()

// Assert equality
type Test = ExpectEqual<string, string>  // string

// Assert true
ExpectTrue<true>
```

## API

### Types

| Type | Description |
|------|-------------|
| `Equal<T, U>` | Strict equality check |
| `NotEqual<T, U>` | Inequality check |
| `SimpleEqual<T, U>` | Simple equality |
| `IsAny<T>` | Check if type is `any` |
| `IsNever<T>` | Check if type is `never` |
| `IsUnknown<T>` | Check if type is `unknown` |
| `IsVoid<T>` | Check if type is `void` |
| `IsUndefined<T>` | Check if type is `undefined` |
| `IsNull<T>` | Check if type is `null` |
| `IsNullable<T>` | Check if type is `null \| undefined` |
| `IsOptional<T>` | Check if type may be `undefined` |
| `IsUnion<T>` | Check if type is a union |
| `IsTuple<T>` | Check if type is a tuple |
| `IsArray<T>` | Check if type is an array |
| `IsInhabited<T>` | Check if type has values |
| `IsUninhabited<T>` | Check if type has no values |
| `HasProperty<T, K>` | Check if type has property |
| `PropertyType<T, K>` | Get property type |
| `Parameters<T>` | Get function parameters |
| `ReturnType<T>` | Get function return type |
| `Parameter<T, N>` | Get parameter at index N |
| `Length<T>` | Get tuple/array length |

### Functions

| Function | Description |
|----------|-------------|
| `check<T>()` | Create a chainable type checker |
| `assert<T>()` | Create an assert type checker |
| `expect<T, U>()` | Create an expect type checker |
| `expectFalse<T>()` | Assert T is false at compile time |

## License

MIT

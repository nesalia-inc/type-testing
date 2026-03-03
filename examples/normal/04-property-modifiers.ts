/**
 * Normal Example 4: Property Modifiers
 *
 * Demonstrates checking property modifiers: readonly, required, and visibility.
 */

import { IsReadonly, IsRequired, IsPublic, IsPrivate, IsProtected } from '@deessejs/type-testing'

// Check if all properties are readonly
type ReadonlyTest1 = IsReadonly<{ readonly a: string }>  // true
type ReadonlyTest2 = IsReadonly<{ a: string }>          // false
type ReadonlyTest3 = IsReadonly<{ readonly a: string; readonly b: number }>  // true
type ReadonlyTest4 = IsReadonly<{ readonly a: string; b: number }>          // false

// Check if all properties are required
type RequiredTest1 = IsRequired<{ a: string }>          // true
type RequiredTest2 = IsRequired<{ a?: string }>        // false
type RequiredTest3 = IsRequired<{ a: string; b: number }>  // true
type RequiredTest4 = IsRequired<{ a: string; b?: number }>  // false

// Check property visibility (naming convention based)
// Public: normal property names
type PublicTest1 = IsPublic<{ a: string }, 'a'>       // true
type PublicTest2 = IsPublic<{ _private: string }, '_private'> // false

// Private: properties starting with __ (double underscore)
type PrivateTest1 = IsPrivate<{ __private: string }, '__private'>  // true
type PrivateTest2 = IsPrivate<{ private: string }, 'private'>      // false
type PrivateTest3 = IsPrivate<{ _private: string }, '_private'>   // false

// Protected: properties starting with _ (single underscore)
type ProtectedTest1 = IsProtected<{ _protected: string }, '_protected'>  // true
type ProtectedTest2 = IsProtected<{ protected: string }, 'protected'>    // false

// Practical example: validate class-like structure
interface UserConfig {
  readonly name: string
  readonly email: string
  age: number
}

interface PrivateConfig {
  readonly __secret: string
  readonly apiKey: string
  debug: boolean
}

type ConfigReadonly = IsReadonly<UserConfig>  // false (has non-readonly 'age')
type PrivateReadonly = IsReadonly<PrivateConfig>  // false

// Check if config has all required fields
type UserRequired = IsRequired<UserConfig>  // true
type PartialUser = IsRequired<{ name?: string }>  // false

export type {
  ReadonlyTest1, ReadonlyTest2, ReadonlyTest3, ReadonlyTest4,
  RequiredTest1, RequiredTest2, RequiredTest3, RequiredTest4,
  PublicTest1, PublicTest2,
  PrivateTest1, PrivateTest2, PrivateTest3,
  ProtectedTest1, ProtectedTest2,
  ConfigReadonly, PrivateReadonly,
  UserRequired, PartialUser
}

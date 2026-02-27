/**
 * Basic Example 1: Type Equality
 *
 * Demonstrates basic type equality checks using Equal, NotEqual, and SimpleEqual.
 */

import { Equal, NotEqual, SimpleEqual } from '@deessejs/type-testing'

// Basic equality checks
type Test1 = Equal<string, string>  // true
type Test2 = Equal<string, number>  // false

// NotEqual is the inverse
type Test3 = NotEqual<string, number>  // true
type Test4 = NotEqual<string, string> // false

// SimpleEqual for plain objects
type Test5 = SimpleEqual<{ a: string }, { a: string }>  // true
type Test6 = SimpleEqual<{ a: string }, { a: number }>  // false

// Compile-time assertions - these will error if types don't match
type Assert1 = Equal<string, string>
type Assert2 = NotEqual<string, number>

// Export to ensure types are used
export type {
  Test1, Test2, Test3, Test4, Test5, Test6,
  Assert1, Assert2
}

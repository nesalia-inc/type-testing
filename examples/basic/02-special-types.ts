/**
 * Basic Example 2: Special Type Detection
 *
 * Demonstrates detection of special TypeScript types like any, never, unknown.
 */

import {
  IsAny,
  IsNever,
  IsUnknown,
  IsVoid,
  IsUndefined,
  IsNull
} from '@deessejs/type-testing'

// Detecting special types
type Test1 = IsAny<any>        // true
type Test2 = IsAny<string>     // false

type Test3 = IsNever<never>    // true
type Test4 = IsNever<string>    // false

type Test5 = IsUnknown<unknown>  // true
type Test6 = IsUnknown<string>    // false

type Test7 = IsVoid<void>       // true
type Test8 = IsVoid<string>     // false

type Test9 = IsUndefined<undefined>  // true
type Test10 = IsUndefined<string>     // false

type Test11 = IsNull<null>      // true
type Test12 = IsNull<string>     // false

// Export to ensure types are used
export type {
  Test1, Test2, Test3, Test4, Test5, Test6,
  Test7, Test8, Test9, Test10, Test11, Test12
}

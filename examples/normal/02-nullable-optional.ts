/**
 * Normal Example 2: Nullable and Optional Types
 *
 * Demonstrates detection of nullable and optional types.
 */

import { IsNullable, IsOptional } from '@deessejs/type-testing'

// Nullable: includes null or undefined
type Nullable1 = IsNullable<string | null>          // true
type Nullable2 = IsNullable<string | undefined>    // true
type Nullable3 = IsNullable<string | null | undefined> // true
type Nullable4 = IsNullable<string>               // false
type Nullable5 = IsNullable<null>                  // true
type Nullable6 = IsNullable<undefined>             // true

// Optional: may include undefined
type Optional1 = IsOptional<string | undefined>    // true
type Optional2 = IsOptional<string | null>          // false
type Optional3 = IsOptional<string>                 // false
type Optional4 = IsOptional<undefined>              // true

// Practical example: extract required properties from a type
type GetRequired<T> = {
  [K in keyof T as IsOptional<T[K]> extends true ? never : K]: T[K]
}

interface User {
  id: string
  name: string
  email?: string
  phone?: string
}

type RequiredUserProps = GetRequired<User>
// { id: string; name: string }

// Practical example: make all properties nullable
type MakeNullable<T> = {
  [K in keyof T]: T[K] | null
}

type NullableUser = MakeNullable<User>
// { id: string | null; name: string | null; email: string | null; phone: string | null }

// Export to ensure types are used
export type {
  Nullable1, Nullable2, Nullable3, Nullable4, Nullable5, Nullable6,
  Optional1, Optional2, Optional3, Optional4,
  RequiredUserProps, NullableUser
}

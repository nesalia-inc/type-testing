/**
 * Normal Example 5: Deep Type Manipulation
 *
 * Demonstrates recursive type transformations and key extraction utilities.
 */

import { DeepReadonly, DeepPartial, RequiredKeys, OptionalKeys } from '@deessejs/type-testing'

// DeepReadonly - makes all properties readonly recursively
type DeepReadonly1 = DeepReadonly<{ a: string }>
// { readonly a: string }

type DeepReadonly2 = DeepReadonly<{ a: string; b: { c: number } }>
// { readonly a: string; readonly b: { readonly c: number } }

type DeepReadonly3 = DeepReadonly<{ users: { name: string; age: number }[] }>
// { readonly users: { readonly name: string; readonly age: number }[] }

// DeepPartial - makes all properties optional recursively
type DeepPartial1 = DeepPartial<{ a: string }>
// { a?: string | undefined }

type DeepPartial2 = DeepPartial<{ a: string; b: { c: number } }>
// { a?: string | undefined; b?: { c?: number | undefined } | undefined }

type DeepPartial3 = DeepPartial<{ user: { name: string; address: { city: string } } }>
// { user?: { name?: string | undefined; address?: { city?: string | undefined } | undefined } | undefined }

// RequiredKeys - get keys of required properties
type RequiredKeys1 = RequiredKeys<{ a: string; b?: number }>  // 'a'
type RequiredKeys2 = RequiredKeys<{ a: string; b: number }>  // 'a' | 'b'
type RequiredKeys3 = RequiredKeys<{ a?: string; b?: number }>  // never
type RequiredKeys4 = RequiredKeys<{ readonly a: string }>  // 'a'

// OptionalKeys - get keys of optional properties
type OptionalKeys1 = OptionalKeys<{ a: string; b?: number }>  // 'b'
type OptionalKeys2 = OptionalKeys<{ a: string; b: number }>    // never
type OptionalKeys3 = OptionalKeys<{ a?: string; b?: number }>  // 'a' | 'b'
type OptionalKeys4 = OptionalKeys<{ a?: string; readonly b: number }>  // 'a'

// Practical example: Form types
interface UserForm {
  name: string
  email: string
  age?: number
  address?: {
    street: string
    city: string
    zip?: string
  }
}

// Get required form fields
type RequiredFormFields = RequiredKeys<UserForm>  // 'name' | 'email'

// Get optional form fields
type OptionalFormFields = OptionalKeys<UserForm>  // 'age' | 'address'

// Create a deep partial for partial updates
type PartialUserForm = DeepPartial<UserForm>
// All properties become optional, including nested ones

// Create a deep readonly for immutable data
type ImmutableUserForm = DeepReadonly<UserForm>
// All properties become readonly, including nested ones

// Practical example: Update function type
type UpdateUser = (updates: PartialUserForm) => void

// Extract update parameters
type UpdateParams = Parameters<UpdateUser>  // [PartialUserForm]

export type {
  DeepReadonly1, DeepReadonly2, DeepReadonly3,
  DeepPartial1, DeepPartial2, DeepPartial3,
  RequiredKeys1, RequiredKeys2, RequiredKeys3, RequiredKeys4,
  OptionalKeys1, OptionalKeys2, OptionalKeys3, OptionalKeys4,
  RequiredFormFields, OptionalFormFields,
  PartialUserForm, ImmutableUserForm,
  UpdateUser, UpdateParams
}

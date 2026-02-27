/**
 * Complex Example 1: Type-Safe API Response Wrapper
 *
 * Demonstrates building a type-safe API response system using the type-testing utilities.
 */

import { IsUnion, check, expect } from '@deessejs/type-testing'

// Define API response types
interface Success<T> {
  ok: true
  data: T
}

interface ApiError {
  ok: false
  error: {
    code: string
    message: string
  }
}

type ApiResponse<T> = Success<T> | ApiError

// Type-safe response handler
type HandleResponse<T> =
  T extends Success<infer Data>
    ? { status: 'success'; data: Data }
    : { status: 'error'; error: ApiError['error'] }

// Practical usage with type checking
interface User {
  id: string
  name: string
  email: string
}

type UserResponse = ApiResponse<User>

// Test our types
type Test1 = IsUnion<UserResponse>  // true (it's a union)

// Validate response handling
type HandledResponse = HandleResponse<UserResponse>
// { status: 'success'; data: User } | { status: 'error'; error: { code: string; message: string } }

// Example: function that only accepts success responses
type ExtractData<T> = T extends Success<infer Data> ? Data : never

type SuccessResponse = Success<User>
type ExtractedUser = ExtractData<SuccessResponse>
// User

// Compile-time validation using check()
function validateResponse<T extends ApiResponse<unknown>>(response: T) {
  check<T>().extends<Success<unknown>>()
  check<T>().extends<ApiError>()

  if ('ok' in response && response.ok) {
    return response as Success<User>
  }
  return response as ApiError
}

// Test with expect()
expect<UserResponse, Success<User> | ApiError>().toExtend()

// Export to ensure types are used
export type {
  Success, ApiError, ApiResponse,
  HandleResponse,
  User, UserResponse,
  Test1, HandledResponse,
  ExtractData, SuccessResponse,
  ExtractedUser
}

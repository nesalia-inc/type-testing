/**
 * Complex Example 2: Type-Safe State Management
 *
 * Demonstrates building a type-safe state management system with actions.
 */

import { IsUnion, check, assert, expect } from '@deessejs/type-testing'

// Define state types
interface AppState {
  users: User[]
  currentUser: User | null
  loading: boolean
  error: string | null
}

interface User {
  id: string
  name: string
  role: 'admin' | 'user' | 'guest'
}

// Define action types
type Action =
  | { type: 'LOAD_USERS'; payload: User[] }
  | { type: 'SET_CURRENT_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REMOVE_USER'; payload: string }

// Validate action types - should be a union
type Test1 = IsUnion<Action>  // true

// Example: extract payload type from action
type ExtractPayload<T> = T extends { payload: infer P } ? P : never

type LoadUsersPayload = ExtractPayload<{ type: 'LOAD_USERS'; payload: User[] }>  // User[]
type SetCurrentUserPayload = ExtractPayload<{ type: 'SET_CURRENT_USER'; payload: User | null }>  // User | null

// Type-safe action creator
function createAction<T extends Action['type']>(
  type: T,
  payload: ExtractPayload<Extract<Action, { type: T }>>
): Extract<Action, { type: T }> {
  return { type, payload } as Extract<Action, { type: T }>
}

// Example usage
const loadUsersAction = createAction('LOAD_USERS', [
  { id: '1', name: 'Alice', role: 'admin' }
])

const setCurrentUserAction = createAction('SET_CURRENT_USER', {
  id: '1',
  name: 'Alice',
  role: 'admin'
})

// Compile-time validation
assert<typeof loadUsersAction>().equals<{ type: 'LOAD_USERS'; payload: User[] }>()
assert<typeof setCurrentUserAction>().equals<{ type: 'SET_CURRENT_USER'; payload: User }>()

// Check action is a union
check<Action>().isUnion()

// Verify payloads
expect<LoadUsersPayload, User[]>().toBeEqual()
expect<SetCurrentUserPayload, User | null>().toBeEqual()

// Export to ensure types are used
export type {
  AppState, User, Action,
  Test1, LoadUsersPayload, SetCurrentUserPayload
}

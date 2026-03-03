/**
 * Normal Example 6: Constructor, Abstract & Special Equality
 *
 * Demonstrates checking constructor types, abstract classes, and special equality.
 */

import { IsConstructor, IsAbstract, IsNeverEqual, Equal } from '@deessejs/type-testing'

// IsConstructor - check if type is a constructor
class ConcreteClass {}
abstract class AbstractClass {}

type ConstructorTest1 = IsConstructor<typeof ConcreteClass>  // true
type ConstructorTest2 = IsConstructor<typeof AbstractClass>  // true (abstract classes are constructors)
type ConstructorTest3 = IsConstructor<ConcreteClass>          // false (instance)
type ConstructorTest4 = IsConstructor<() => void>              // false
type ConstructorTest5 = IsConstructor<new () => object>        // true

// IsAbstract - check if type is abstract
type AbstractTest1 = IsAbstract<typeof AbstractClass>   // true
type AbstractTest2 = IsAbstract<typeof ConcreteClass>   // false
type AbstractTest3 = IsAbstract<AbstractClass>            // true
type AbstractTest4 = IsAbstract<ConcreteClass>           // false (instance)
type AbstractTest5 = IsAbstract<() => void>             // false

// Practical example: Factory pattern type safety
interface ClassConstructor<T> {
  new (...args: unknown[]): T
}

function createInstance<T>(ctor: ClassConstructor<T>): T {
  return new ctor()
}

// This works with concrete classes
class User {
  constructor(public name: string) {}
}

// This would fail with abstract classes
type IsUserCtor = IsConstructor<typeof User>  // true

// IsNeverEqual - special equality for never types
// Note: Equal<never, never> returns false because never is never matched
// IsNeverEqual specifically checks if BOTH types are never
type NeverEqualTest1 = IsNeverEqual<never, never>     // true
type NeverEqualTest2 = IsNeverEqual<never, string>    // false
type NeverEqualTest3 = IsNeverEqual<string, never>   // false
type NeverEqualTest4 = IsNeverEqual<any, any>         // false
type NeverEqualTest5 = IsNeverEqual<unknown, unknown> // false

// Contrast with Equal
type EqualTest1 = Equal<never, never>  // false (never matches nothing)
type EqualTest2 = Equal<never, string>  // false
type EqualTest3 = Equal<string, string> // true

// Practical example: Type-safe error handling
type Result<T, E = never> =
  | { ok: true; value: T }
  | { ok: false; error: E }

// Check if error type is never (meaning no error possible)
type IsNoError<ResultType> = IsNeverEqual<ResultType, never>

type SuccessResult = Result<string>
type ErrorResult = Result<string, Error>

type Test1 = IsNoError<SuccessResult>   // false (has string as ok)
type Test2 = IsNoError<ErrorResult>      // false (has Error)
type Test3 = IsNoError<Result<never>>    // true (only success, no error)

// Practical example: Discriminated union handling
type Status = 'pending' | 'success' | 'error'

interface PendingState { status: 'pending' }
interface SuccessState { status: 'success'; data: string }
interface ErrorState { status: 'error'; error: Error }

type AppState = PendingState | SuccessState | ErrorState

// Get the error type from state if it exists
type ErrorType<AppState> = AppState extends { status: 'error'; error: infer E } ? E : never

type Error1 = ErrorType<SuccessState>  // never
type Error2 = ErrorType<ErrorState>    // Error

type HasError = IsNeverEqual<ErrorType<SuccessState>, never>  // false (no error possible)
type HasError2 = IsNeverEqual<ErrorType<ErrorState>, never>   // true (has error)

export type {
  ConstructorTest1, ConstructorTest2, ConstructorTest3, ConstructorTest4, ConstructorTest5,
  AbstractTest1, AbstractTest2, AbstractTest3, AbstractTest4, AbstractTest5,
  NeverEqualTest1, NeverEqualTest2, NeverEqualTest3, NeverEqualTest4, NeverEqualTest5,
  EqualTest1, EqualTest2, EqualTest3,
  IsUserCtor,
  Test1, Test2, Test3,
  Error1, Error2, HasError, HasError2
}

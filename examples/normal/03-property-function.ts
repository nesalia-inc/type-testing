/**
 * Normal Example 3: Property and Function Type Testing
 *
 * Demonstrates property detection and function type introspection.
 */

import { HasProperty, PropertyType, Parameters, ReturnType, Parameter } from '@deessejs/type-testing'

// Property testing
type PropTest1 = HasProperty<{ a: string }, 'a'>     // true
type PropTest2 = HasProperty<{ a: string }, 'b'>      // false
type PropTest3 = HasProperty<{ a?: string }, 'a'>     // true (optional)

// Get property type
type PropType1 = PropertyType<{ a: string }, 'a'>    // string
type PropType2 = PropertyType<{ a: { b: number } }, 'a'>  // { b: number }

// Function parameters
type Params1 = Parameters<(a: string, b: number) => void>  // [string, number]
type Params2 = Parameters<() => void>                      // []
type Params3 = Parameters<(x: string) => number>          // [string]

// Function return type
type Return1 = ReturnType<(a: string) => number>    // number
type Return2 = ReturnType<() => string>             // string
type Return3 = ReturnType<() => void>               // void

// Get specific parameter
type Param1 = Parameter<(a: string, b: number) => void, 0>  // string
type Param2 = Parameter<(a: string, b: number) => void, 1>  // number

// Practical example: create a type-safe event handler
interface EventMap {
  click: { x: number; y: number }
  keypress: { key: string }
  focus: undefined
}

type EventHandler<T extends keyof EventMap> = (
  event: EventMap[T]
) => void

// Extract event handler parameter types
type ClickHandlerParams = Parameters<EventHandler<'click'>>    // [{ x: number; y: number }]
type KeypressHandlerParams = Parameters<EventHandler<'keypress'>> // [{ key: string }]

// Export to ensure types are used
export type {
  PropTest1, PropTest2, PropTest3,
  PropType1, PropType2,
  Params1, Params2, Params3,
  Return1, Return2, Return3,
  Param1, Param2,
  ClickHandlerParams, KeypressHandlerParams
}

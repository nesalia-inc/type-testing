/**
 * Basic Example 3: Chainable API
 *
 * Demonstrates the check(), assert(), and expect() functions for fluent type testing.
 */

import { check, assert, expect } from '@deessejs/type-testing'

// Using check() - soft type checking
check<string>().equals<string>()
check<string>().extends<string>()
check<string>().extends<any>()

// Using assert() - strict type checking
assert<string>().equals<string>()

// Using expect() - BDD-style API
expect<string, string>().toBeEqual()
expect<string, number>().toBeNotEqual()
expect<string, string>().toExtend()

// Export to ensure types are used
export {}

/**
 * Normal Example 1: Union, Tuple, and Array Detection
 *
 * Demonstrates how to distinguish between unions, tuples, and arrays.
 */

import { IsUnion, IsTuple, IsArray } from '@deessejs/type-testing'

// Union detection
type UnionTest1 = IsUnion<'a' | 'b'>       // true
type UnionTest2 = IsUnion<'a'>               // false (single type)
type UnionTest3 = IsUnion<string | number>   // true
type UnionTest4 = IsUnion<string>           // false (primitive)

// Tuple detection
type TupleTest1 = IsTuple<[string, number]>  // true
type TupleTest2 = IsTuple<[]>                // true (empty tuple)
type TupleTest3 = IsTuple<string[]>          // false (array)
type TupleTest4 = IsTuple<[string]>          // true

// Array detection
type ArrayTest1 = IsArray<string[]>       // true
type ArrayTest2 = IsArray<number[]>       // true
type ArrayTest3 = IsArray<[string]>       // false (tuple)
type ArrayTest4 = IsArray<[]>             // false (empty tuple)

// Practical example: function that accepts only tuples
type AcceptsTuple<T> = IsTuple<T> extends true ? T : never

type Result1 = AcceptsTuple<[string, number]>  // [string, number]
type Result2 = AcceptsTuple<string[]>           // never

// Export to ensure types are used
export type {
  UnionTest1, UnionTest2, UnionTest3, UnionTest4,
  TupleTest1, TupleTest2, TupleTest3, TupleTest4,
  ArrayTest1, ArrayTest2, ArrayTest3, ArrayTest4,
  Result1, Result2
}

/**
 * Function type utilities.
 */

/**
 * Gets the parameters of a function type as a tuple.
 */
export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

/**
 * Gets the return type of a function type.
 */
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

/**
 * Gets the parameter type at a specific index.
 */
export type Parameter<T extends (...args: any[]) => any, N extends number> = Parameters<T>[N]

/**
 * Checks if a type is a constructor.
 *
 * @example
 * ```typescript
 * class Foo {}
 * type Test = IsConstructor<typeof Foo> // true
 * type Test2 = IsConstructor<Foo> // false
 * ```
 */
export type IsConstructor<T> = T extends new (...args: any[]) => any ? true : false

/**
 * Checks if a type is abstract.
 *
 * @example
 * ```typescript
 * abstract class Foo {}
 * type Test = IsAbstract<typeof Foo> // true
 * type Test2 = IsAbstract<Foo> // false
 * ```
 */
export type IsAbstract<T> = T extends abstract new (...args: any[]) => any ? true : false

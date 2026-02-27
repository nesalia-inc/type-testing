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

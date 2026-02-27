/**
 * Property testing utilities.
 */

/**
 * Checks if a type has a specific property.
 */
export type HasProperty<T, K extends PropertyKey> = K extends keyof T ? true : false

/**
 * Gets the type of a specific property from a type.
 */
export type PropertyType<T, K extends keyof T> = T[K]

/**
 * Length utility.
 */

/**
 * Gets the length of an array or tuple type.
 */
export type Length<T extends readonly any[]> = T['length']

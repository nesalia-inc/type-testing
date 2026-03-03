/**
 * Deep type manipulation utilities.
 */

/**
 * Makes all properties of a type readonly recursively.
 *
 * @example
 * ```typescript
 * type Test = DeepReadonly<{ a: string; b: { c: number } }>
 * // { readonly a: string; readonly b: { readonly c: number } }
 * ```
 */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

/**
 * Makes all properties of a type optional recursively.
 *
 * @example
 * ```typescript
 * type Test = DeepPartial<{ a: string; b: { c: number } }>
 * // { a?: string; b?: { c?: number } | undefined }
 * ```
 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

/**
 * Gets the keys of required properties from a type.
 *
 * @example
 * ```typescript
 * type Test = RequiredKeys<{ a: string; b?: number }>
 * // 'a'
 * ```
 */
export type RequiredKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  [K in keyof T]: {} extends Pick<T, K> ? never : K
}[keyof T]

/**
 * Gets the keys of optional properties from a type.
 *
 * @example
 * ```typescript
 * type Test = OptionalKeys<{ a: string; b?: number }>
 * // 'b'
 * ```
 */
export type OptionalKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T]

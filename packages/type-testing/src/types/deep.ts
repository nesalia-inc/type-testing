/**
 * Deep type manipulation utilities.
 */

/* eslint-disable @typescript-eslint/no-empty-object-type */
/**
 * Makes all properties of a type readonly recursively.
 * Properly handles arrays by making array elements readonly as well.
 *
 * @example
 * ```typescript
 * type Test = DeepReadonly<{ a: string; b: { c: number } }>
 * // { readonly a: string; readonly b: { readonly c: number } }
 *
 * type Test2 = DeepReadonly<{ items: { name: string }[] }>
 * // { readonly items: readonly { readonly name: string }[] }
 * ```
 */
export type DeepReadonly<T> = T extends readonly (infer R)[]
  ? readonly DeepReadonly<R>[]
  : T extends (infer R)[]
  ? readonly DeepReadonly<R>[]
  : {
      readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
    }

/**
 * Makes all properties of a type optional recursively.
 * Properly handles arrays by making array elements optional as well.
 *
 * @example
 * ```typescript
 * type Test = DeepPartial<{ a: string; b: { c: number } }>
 * // { a?: string; b?: { c?: number } | undefined }
 *
 * type Test2 = DeepPartial<{ items: { name: string }[] }>
 * // { items?: { name?: string | undefined }[] | undefined }
 * ```
 */
export type DeepPartial<T> = T extends readonly (infer R)[]
  ? DeepPartial<R>[]
  : T extends (infer R)[]
  ? DeepPartial<R>[]
  : {
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
  // Using {} extends Pick<T, K> to detect optional keys (standard TypeScript pattern)
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
  // Using {} extends Pick<T, K> to detect optional keys (standard TypeScript pattern)
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T]

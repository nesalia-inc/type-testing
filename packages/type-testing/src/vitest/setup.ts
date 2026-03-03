/**
 * Vitest setup for type-testing.
 *
 * This module provides integration with Vitest.
 *
 * @example
 * ```typescript
 * // vitest.config.ts
 * import { defineConfig } from 'vitest/config'
 *
 * export default defineConfig({
 *   test: {
 *     setupFiles: ['@deessejs/type-testing/vitest/setup']
 *   }
 * })
 * ```
 */

export { expectType } from './matchers.js'

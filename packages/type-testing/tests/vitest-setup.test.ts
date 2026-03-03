/**
 * Vitest setup module tests.
 */

import { describe, it, expect } from 'vitest'

// Import from the setup module
import '../src/vitest/setup'

describe('Vitest setup', () => {
  it('should export expectType from setup', async () => {
    const { expectType } = await import('../src/vitest/setup')
    expect(expectType).toBeDefined()
    const result = expectType<string>()
    expect(result).toBeDefined()
  })
})

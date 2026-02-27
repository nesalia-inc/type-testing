/**
 * Length utility tests.
 */

import { describe, it } from 'vitest'
import { Length } from '../src'

describe('Length', () => {
  it('should get array length', () => {
    type Test = Length<['a', 'b', 'c']>
    const _test: Test = 3
  })

  it('should get empty array length', () => {
    type Test = Length<[]>
    const _test: Test = 0
  })
})

import { describe, expect, it } from 'vitest'
import apiClient from './apiClient'

describe('apiClient (US-0002)', () => {
  // AC-0002-05: NFR-0001.
  it('timesOutAfterTenSeconds', () => {
    expect(apiClient.defaults.timeout).toBe(10_000)
  })
})

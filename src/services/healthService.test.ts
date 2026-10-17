import { describe, expect, expectTypeOf, it, vi } from 'vitest'
import { answering } from '../test/fakeFetch'
import type { HealthResponse } from '../types/health'
import { checkApiHealth } from './healthService'

describe('healthService (US-0003)', () => {
  // AC-0003-04
  it('returnsTypedHealthResponse', async () => {
    const body: HealthResponse = {
      status: 'healthy',
      service: 'online-delivery-api',
      timestamp: '2026-10-16T09:30:00Z',
    }
    vi.stubEnv('VITE_API_URL', 'http://localhost:5154')
    vi.stubGlobal('fetch', answering(body))

    expectTypeOf(checkApiHealth).returns.resolves.toEqualTypeOf<HealthResponse>()
    expect(await checkApiHealth()).toEqual(body)
  })
})

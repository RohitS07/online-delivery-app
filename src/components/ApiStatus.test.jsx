import { act, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { answering, failing, neverAnswering } from '../test/fakeFetch'
import ApiStatus from './ApiStatus'

const CHECKING = 'Checking the API…'
const HEALTHY = 'API is healthy'
const UNREACHABLE = 'Unable to reach the API'

function shownStatus() {
  return screen.getByRole('status').textContent
}

describe('ApiStatus (US-0002)', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_API_URL', 'http://localhost:5154')
  })

  // AC-0002-01
  it('showsOnlyCheckingWhileWaiting', () => {
    vi.stubGlobal('fetch', neverAnswering())

    render(<ApiStatus />)

    expect(shownStatus()).toBe(CHECKING)
  })

  // AC-0002-02
  it('showsOnlyHealthyWhenApiAnswers', async () => {
    vi.stubGlobal(
      'fetch',
      answering({
        status: 'healthy',
        service: 'online-delivery-api',
        timestamp: '2026-10-16T09:30:00Z',
      }),
    )

    render(<ApiStatus />)

    expect(await screen.findByText(HEALTHY)).toBeTruthy()
    expect(shownStatus()).toBe(HEALTHY)
  })

  // AC-0002-03
  it('showsOnlyUnreachableWhenRequestFails', async () => {
    for (const fetch of [answering({ title: 'Server error' }, 500), failing()]) {
      vi.stubGlobal('fetch', fetch)

      const { unmount } = render(<ApiStatus />)

      expect(await screen.findByText(UNREACHABLE)).toBeTruthy()
      expect(shownStatus()).toBe(UNREACHABLE)
      unmount()
    }
  })

  // AC-0002-04: the shared client gives up after NFR-0001's 10 seconds.
  it('showsUnreachableAfterTimeout', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    vi.stubGlobal('fetch', neverAnswering())

    render(<ApiStatus />)
    await act(() => vi.advanceTimersByTimeAsync(9_999))
    expect(shownStatus()).toBe(CHECKING)

    await act(() => vi.advanceTimersByTimeAsync(1))
    expect(shownStatus()).toBe(UNREACHABLE)
  })

  // AC-0002-06
  it('namesMissingApiUrl', async () => {
    vi.stubEnv('VITE_API_URL', '')
    const fetch = answering({ status: 'healthy' })
    vi.stubGlobal('fetch', fetch)

    render(<ApiStatus />)

    const message = `${UNREACHABLE}: VITE_API_URL is not set`
    expect(await screen.findByText(message)).toBeTruthy()
    expect(shownStatus()).toBe(message)
    expect(fetch).not.toHaveBeenCalled()
  })
})

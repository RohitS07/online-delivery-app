import { vi } from 'vitest'

/** A fetch that answers every request with this JSON body and status. */
export function answering(body: unknown, status = 200) {
  return vi.fn(
    async () =>
      new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
      }),
  )
}

/** A fetch that fails as a browser does when the API cannot be reached. */
export function failing() {
  return vi.fn(async () => {
    throw new TypeError('Failed to fetch')
  })
}

/** A fetch that never answers, and gives up only when its request is aborted. */
export function neverAnswering() {
  return vi.fn(
    (input: RequestInfo | URL, init?: RequestInit) =>
      new Promise<Response>((_, reject) => {
        const signal = init?.signal ?? (input instanceof Request ? input.signal : undefined)
        signal?.addEventListener('abort', () => reject(signal.reason))
      }),
  )
}

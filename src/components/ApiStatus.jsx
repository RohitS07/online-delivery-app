import { useEffect, useState } from 'react'
import { MissingApiUrlError } from '../services/apiClient'
import { checkApiHealth } from '../services/healthService'

const UNREACHABLE = 'Unable to reach the API'

function unreachable(error) {
  const message =
    error instanceof MissingApiUrlError ? `${UNREACHABLE}: ${error.message}` : UNREACHABLE
  return { kind: 'unreachable', message }
}

// Exactly one state at a time, checking, healthy or unreachable: BPM-0001.
export default function ApiStatus() {
  const [state, setState] = useState({ kind: 'checking' })

  useEffect(() => {
    let mounted = true
    const show = (next) => mounted && setState(next)
    checkApiHealth()
      .then((health) => show(health?.status === 'healthy' ? { kind: 'healthy' } : unreachable()))
      .catch((error) => show(unreachable(error)))
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="p-4">
      <p role="status" className={state.kind === 'unreachable' ? 'text-red-600' : 'text-gray-700'}>
        {state.kind === 'checking' && 'Checking the API…'}
        {state.kind === 'healthy' && 'API is healthy'}
        {state.kind === 'unreachable' && state.message}
      </p>
    </div>
  )
}

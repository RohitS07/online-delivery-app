import axios from 'axios'

// Every request to the API gives up after 10 seconds: NFR-0001.
export const REQUEST_TIMEOUT_MS = 10_000

export class MissingApiUrlError extends Error {
  constructor() {
    super('VITE_API_URL is not set')
    this.name = 'MissingApiUrlError'
  }
}

const apiClient = axios.create({
  adapter: 'fetch',
  timeout: REQUEST_TIMEOUT_MS,
})

// No address means no request, and an error that names the missing setting: BPM-0001.
apiClient.interceptors.request.use((config) => {
  const baseURL = import.meta.env.VITE_API_URL
  if (!baseURL) {
    throw new MissingApiUrlError()
  }
  config.baseURL = baseURL
  return config
})

export default apiClient

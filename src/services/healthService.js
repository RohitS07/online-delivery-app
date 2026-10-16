import apiClient from './apiClient'

/** Calls GET /api/v1/health and resolves with its HealthResponse: SPEC-0001. */
export async function checkApiHealth() {
  const response = await apiClient.get('/api/v1/health')
  return response.data
}

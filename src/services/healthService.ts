import type { HealthResponse } from '../types/health'
import apiClient from './apiClient'

/** Calls GET /api/v1/health and resolves with its HealthResponse: SPEC-0001. */
export async function checkApiHealth(): Promise<HealthResponse> {
  const response = await apiClient.get<HealthResponse>('/api/v1/health')
  return response.data
}

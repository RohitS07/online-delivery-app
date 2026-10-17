/** The body of GET /api/v1/health: SPEC-0001. */
export interface HealthResponse {
  status: 'healthy'
  service: 'online-delivery-api'
  timestamp: string
}

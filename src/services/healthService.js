import apiClient from "./apiClient";

export async function checkApiHealth() {
  const response = await apiClient.get("/api/v1/health");
  return response.data;
}
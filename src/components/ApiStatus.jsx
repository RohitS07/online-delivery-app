import { useEffect, useState } from "react";
import { checkApiHealth } from "../services/healthService";

export default function ApiStatus() {
  const [status, setStatus] = useState("Checking API...");
  const [error, setError] = useState("");

  useEffect(() => {
    checkApiHealth()
      .then((data) => setStatus(`API is ${data.status}`))
      .catch(() => setError("Unable to connect to the API."));
  }, []);

  return (
    <div className="p-4">
      <p>{status}</p>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
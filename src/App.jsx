import ApiStatus from "./components/ApiStatus";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <h1 className="p-4 text-xl font-bold">Online Delivery</h1>
      <ApiStatus />
    </main>
  );
}
import AddAuthor from "./components/AddAuthor";
import AddBooks from "./components/AddBooks";
import AddOrders from "./components/AddOrders";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Microservices</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left side: Authors */}
        <div className="bg-white shadow rounded-lg p-4">
          <AddAuthor />
        </div>

        {/* Right side 2 rows */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <AddBooks />
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <AddOrders />
          </div>
        </div>

      </div>
    </div>
  );
}

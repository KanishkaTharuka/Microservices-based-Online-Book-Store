import { useEffect, useState } from "react";

export default function AddOrders() {
  const [book, setBook] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book, quantity }),
      });
      const newOrder = await res.json();
      setOrders((prev) => [...prev, newOrder]);
      setBook("");
      setQuantity(1);
    } catch {
      alert("Failed to add order");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/books")
      .then((r) => r.json())
      .then(setBooks);

    fetch("http://localhost:4000/api/orders")
      .then((r) => r.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Order</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-4 rounded shadow">
          <select
            className="w-full border p-2 rounded"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          >
            <option value="">Choose book</option>
            {books.map((b) => (
              <option key={b._id} value={b.title}>
                {b.title}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="w-full border p-2 rounded"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
            Add Order
          </button>
        </form>

        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Orders List</h3>
          <ul className="list-disc ml-6">
            {orders.map((o) => (
              <li key={o._id}>{o.book} — Qty: {o.quantity}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

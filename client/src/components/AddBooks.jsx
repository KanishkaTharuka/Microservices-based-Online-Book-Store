import { useEffect, useState } from "react";

export default function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author }),
      });
      const newBook = await res.json();
      setBooks((prev) => [...prev, newBook]);
      setTitle("");
      setAuthor("");
    } catch (error) {
      alert("Failed to add book");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/authors")
      .then((r) => r.json())
      .then(setAuthors);

    fetch("http://localhost:4000/api/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Book</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-4 rounded shadow">
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="">Choose Author</option>
            {authors.map((a) => (
              <option key={a._id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>

          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Add Book
          </button>
        </form>

        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Book List</h3>
          <ul className="list-disc ml-6">
            {books.map((b) => (
              <li key={b._id}>{b.title} — {b.author}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

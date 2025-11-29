import { useState, useEffect } from "react";

export default function AddAuthor() {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/authors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const newAuthor = await res.json();
      setAuthors((prev) => [...prev, newAuthor]);
      setName("");
    } catch (err) {
      alert("Error adding author");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/authors")
      .then((r) => r.json())
      .then(setAuthors);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Add Author</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          className="w-full border p-2 rounded"
          type="text"
          value={name}
          placeholder="Author name"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Add Author
        </button>
      </form>

      <h3 className="mt-4 font-semibold">Author List:</h3>
      <ul className="list-disc ml-6">
        {authors.map((a) => (
          <li key={a._id}>{a.name}</li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect,useState } from "react";

export default function AddBooks({ onNewBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const [authors, setAuthors] = useState([]);
    const [books, setBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch ("http://localhost:4000/api/books", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title, author })
            });
            const newBook = await res.json();
            setBooks((prev) => [...prev, newBook]);
            setTitle("");
            setAuthor("");
            if (onNewBook) onNewBook(newBook);
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book.");
        }
}



    useEffect(() => {
        const fetchAuthors = async () => {
            const res = await fetch("http://localhost:4000/api/authors")
            const data = await res.json();
            setAuthors(data);
        };
        fetchAuthors();
    }, []);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("http://localhost:4000/api/books"); 
            const data = await res.json();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    return(
        <div>
            <h2>Add New Book</h2>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                

                <div>
                    <label>Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="">Select an author</option>
                        {authors.map((a) =>(
                            <option key={a._id} value={a.name}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" onClick={handleSubmit}>Add Book</button>
            </form>

            <div>
                <h2>Available books</h2>
                {books.map((b) => (
                    <li key={b._id}>{b.title} by {b.author}</li>
                ))}
            </div>
        </div>
    );
}
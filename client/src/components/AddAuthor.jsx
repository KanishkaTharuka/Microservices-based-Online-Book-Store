import { useState, useEffect } from 'react'

export default function AddAuthor({onNewAuthor }) {
    const [name, setName] = useState('');

    const [authors, setAuthors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/authors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            const newAuthor = await response.json();
            setAuthors((prev) => [...prev, newAuthor]);
            setName('');
            if (onNewAuthor) onNewAuthor(newAuthor);
        } catch (error) {
            console.error('Error adding author:', error);
            alert('Failed to add author.');
        };
    }

    useEffect(() => {
        const fetchAuthors = async () => {
            const res = await fetch('http://localhost:4000/api/authors');
            const data = await res.json();
            setAuthors(data);
        };
        fetchAuthors();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Author Name"
                    required
                />
                <button type="submit">Add Author</button>
            </form>
            <div>
                <h6>Authors Name</h6>
                {authors.map((a) => (
                    <li key={a._id} value={a.name}>
                    {a.name}</li>

                ))}
                
            </div>
        </div>


    );
}
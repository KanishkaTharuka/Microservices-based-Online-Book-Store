import { useState } from 'react'

export default function AddAuthor() {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        if (response.ok) {
            setName('');
            alert('Author added successfully');
        } else {
            alert('Failed to add author');
        }
    };


    return (
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
    );
}
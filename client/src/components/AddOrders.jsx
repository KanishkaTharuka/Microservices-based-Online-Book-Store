import {useState, useEffect} from 'react';

export default function AddOrders({ onNewOrder }) {
    const [book, setBook] = useState('');
    const [quantity, setQuantity] = useState(1);

    const [books, setBooks] = useState([]);
    const [orders, setOrders] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ book, quantity }),
            });
            const newOrder = await res.json();
            setOrders((prev) => [...prev, newOrder]);
            setBook('');
            setQuantity(1);
            if (onNewOrder) onNewOrder(newOrder);
        } catch (error) {
            console.error('Error adding order:', error);
            alert('Failed to add order.');
        }
    };

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch('http://localhost:4000/api/books');
            const data = await res.json();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await fetch('http://localhost:4000/api/orders');
            const data = await res.json();
            setOrders(data);
        };
        fetchOrders();
    }, []); 

    return(

        <div>
            <form>
                <div>
                    <label>Book ID:</label>
                    <select value={book} onChange={(e) => setBook(e.target.value)}>
                        <option value="">Select a book</option>
                        {books.map((b) =>(
                            <option key={b._id} value={b.title}>
                                {b.title}
                            </option>))}
                    </select>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} type="submit">Add Order</button>
            </form>
            <div>
                <h2>Available orders</h2>
                <ul>
                    {orders.map((o) => (
                        <li key={o._id}>{o.book} - Quantity: {o.quantity}</li>
                    ))}
                </ul>
            </div>
        </div>

    );

}
import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/books.js';

const app = express();

mongoose.connect('mongodb+srv://kanishkatharuka500_db_user:L1tU2O9u5Atv2xVw@cluster0.d21dir0.mongodb.net/book_service')
.then(() => {console.log('Connected to MongoDB');})
.catch(err => {console.error('Failed to connect to MongoDB', err);});

app.use(express.json());


app.use('/', bookRoutes);

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Book Service is running on port ${PORT}`);
});


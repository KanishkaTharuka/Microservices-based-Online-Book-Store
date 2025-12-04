import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import bookRoutes from './routes/books.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => {console.log('Connected to MongoDB');})
.catch(err => {console.error('Failed to connect to MongoDB', err);});

app.use(express.json());


app.use('/', bookRoutes);


app.listen(PORT, () => {
    console.log(`Book Service is running on port ${PORT}`);
});


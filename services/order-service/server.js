import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
import reviewRoutes from './routes/order.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4002;

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use('/', reviewRoutes);

app.listen(PORT, () => {
    console.log(`Review Service is running on port ${PORT}`);
});
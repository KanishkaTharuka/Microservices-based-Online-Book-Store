import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import reviewRoutes from './routes/order.js';

const app = express();
app.use(cors());
const PORT = 4002;

mongoose.connect('mongodb+srv://kanishkatharuka500_db_user:L1tU2O9u5Atv2xVw@cluster0.d21dir0.mongodb.net/order_service')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use('/', reviewRoutes);

app.listen(PORT, () => {
    console.log(`Review Service is running on port ${PORT}`);
});
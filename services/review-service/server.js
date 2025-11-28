import express from 'express';
import mongoose from 'mongoose';
import reviewRoutes from './routes/review.js';

const app = express();
const PORT = 4002;

mongoose.connect('mongodb+srv://kanishkatharuka500_db_user:L1tU2O9u5Atv2xVw@cluster0.d21dir0.mongodb.net/review_service')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use('/', reviewRoutes);

app.listen(PORT, () => {
    console.log(`Review Service is running on port ${PORT}`);
});
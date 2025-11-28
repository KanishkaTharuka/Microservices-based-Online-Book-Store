import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    book: String,
    quantity: Number
});

export const Order = mongoose.model('Order', OrderSchema);
import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: String,
    author: String
});

export const Book = mongoose.model('Book', BookSchema);
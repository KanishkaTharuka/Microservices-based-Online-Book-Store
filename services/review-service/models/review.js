import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    reviewText: String,
    rating: Number
});

export const Review = mongoose.model('Review', ReviewSchema);
import express from 'express';
import {Review} from '../models/review.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();    
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

export default router;
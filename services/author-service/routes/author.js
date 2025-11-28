import express from 'express';
import {Author} from '../models/author.js';

const router = express.Router();

//create author
router.post('/', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get all authors
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
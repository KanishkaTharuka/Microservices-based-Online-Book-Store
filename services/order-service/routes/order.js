import express from 'express';
import {Order} from '../models/order.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

export default router;
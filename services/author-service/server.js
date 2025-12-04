import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import userRoutes from "./routes/author.js";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4003;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => {console.log('Connected to MongoDB');})
.catch(err => {console.error('Failed to connect to MongoDB', err);});

app.use(express.json());

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});




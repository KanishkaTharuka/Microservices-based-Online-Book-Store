import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/author.js";

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://kanishkatharuka500_db_user:L1tU2O9u5Atv2xVw@cluster0.d21dir0.mongodb.net/author_service')
.then(() => {console.log('Connected to MongoDB');})
.catch(err => {console.error('Failed to connect to MongoDB', err);});

app.use(express.json());

app.use('/', userRoutes);

const PORT = 4003;

app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});




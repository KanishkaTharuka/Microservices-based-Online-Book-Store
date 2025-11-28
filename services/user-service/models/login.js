import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  email: String,
  password: String
});

export const Login = mongoose.model('Login', loginSchema);
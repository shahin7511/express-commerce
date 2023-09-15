import mongoose from "mongoose";
const connection = await mongoose.connect(process.env.DATABASE_URL);

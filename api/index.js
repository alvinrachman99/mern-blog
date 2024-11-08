import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config()

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log('MongoDb is connected')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.use(express.json())

app.listen(2828, () => {
    console.log('Server is running on port 2828!?')
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)
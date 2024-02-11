import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(2828, () => {
    console.log('Server is running on port 2828!?')
})
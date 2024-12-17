import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

config({
    path: "./data/config.env"
})

const app = express();

const port = process.env.PORT || 5000;
connectDB();

app.get('/', (req, res) => {
    res.send("Working")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import { login, logout, register } from "./controller.js";
import { errorMiddleware } from "./Middlewares/error.js";

config({
    path: "./data/config.env"
})

const app = express();

//Middlewares
app.use(express.json())

app.post("/api/register",register)
app.post("/api/login",login)
app.get("/api/logout",logout)

const port = process.env.PORT || 5000;
connectDB();

app.get('/', (req, res) => {
    res.send("Working")
})

//Error Middleware
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
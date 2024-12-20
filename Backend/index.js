import express from "express";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import { allUsers, changeRole, login, logout, register, userData } from "./controller.js";
import { errorMiddleware } from "./Middlewares/error.js";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "./Middlewares/auth.js";
import cors from "cors";

config({
    path: "./data/config.env"
})

const app = express();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
// app.use(express.urlencoded())

// API's
app.post("/api/register",register)
app.post("/api/login",login)
app.get("/api/logout",logout)
app.get("/api/user",isAuthenticated,userData)
app.get("/api/allusers",isAuthenticated,allUsers)
app.post("/api/changerole",isAuthenticated,changeRole)

// eslint-disable-next-line no-undef
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
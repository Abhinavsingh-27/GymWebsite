import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./Database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import Router from './routes/routes.js';

const app = express()
dotenv.config({ path: "./config/config.env"});


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use('/api/v1/reservation', Router)

dbConnection();

app.use(errorMiddleware)

export default app;
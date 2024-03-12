import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import authRouter from "./routers/authRouter";

const app: Express = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

export default app;
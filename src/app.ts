import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";

const app: Express = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

export default app;
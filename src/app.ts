import cors from "cors";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();

app.use(morgan("tiny"));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('It is working...');
});

export default app;
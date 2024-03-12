import { Router } from "express";
import { authController } from "../controllers/authController";

const authRouter: Router = Router();

authRouter.get("/", authController.execute);

export default authRouter;

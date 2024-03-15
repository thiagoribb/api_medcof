import { Router } from "express";
import { createUserController } from "../controllers/createUserController";
import { ValidateSchema } from "../middlewares/validateSchema";
import { postUserSchema } from "../schemas/postUserSchema";

const userRouter: Router = Router();
const validatePostUserSchema = new ValidateSchema(postUserSchema);

userRouter.post("/", validatePostUserSchema.execute.bind(validatePostUserSchema), createUserController.execute);

export default userRouter;
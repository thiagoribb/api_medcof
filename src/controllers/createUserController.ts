import { Request, Response } from "express";
import { userService } from "../services/userService";

class CreateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { username }: { username: string } = req.body;
      const newUserWithJwt = await userService.create(username);

      return res.status(201).send(newUserWithJwt);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const createUserController = new CreateUserController();
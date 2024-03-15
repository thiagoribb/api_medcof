import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

class CreateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { username }: { username: string } = req.body;
      const newUserWithJwt = await userRepository.create(username);

      return res.status(201).send(newUserWithJwt);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const createUserController = new CreateUserController();
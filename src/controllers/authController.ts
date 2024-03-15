import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

class AuthController {
  async execute(req: Request, res: Response) {
    // const { token } = req.headers;
    const token = req.headers.authorization || '';

    try {
      const auth: boolean = await userRepository.authenticate(token); 
      if(auth) {
        return res.sendStatus(200);
      }

      return res.sendStatus(403);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const authController = new AuthController();
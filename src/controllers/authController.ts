import { Request, Response } from "express";
import { userService } from "../services/userService";

class AuthController {
  async execute(req: Request, res: Response) {
    const token = req.headers.authorization || '';

    if(!token) {
      return res.sendStatus(400);
    }

    try {
      const auth: boolean = await userService.authenticate(token); 
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
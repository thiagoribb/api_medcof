import { Request, Response } from "express";

class AuthController {
  async execute(req: Request, res: Response) {
    try {
      return res.sendStatus(200);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const authController = new AuthController();
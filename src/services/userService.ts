import jwt from "jsonwebtoken";
import { UserWithToken } from "../interfaces/UserWithToken";
import { prisma } from "../prismaClient";

const secretKey = process.env.JWT_SECRET_KEY || '';

class UserService {
  async create(username: string): Promise<UserWithToken> {
    const newUser = await prisma.user.create({
      data: {
        username,
      }
    });

    const token = jwt.sign({username}, secretKey, { expiresIn: "1 day"});

    return {token, ...newUser};
  }

  async authenticate(token: string): Promise<boolean> {
    try {
      const decodedToken: any = jwt.verify(token, secretKey);
      const user = await prisma.user.findFirst({where: {username: decodedToken.username}});

      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

export const userService = new UserService();

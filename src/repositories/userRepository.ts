import jwt from "jsonwebtoken";
import { prisma } from "..";
import { UserWithToken } from "../interfaces/UserWithToken";

const secretKey = process.env.JWT_SECRET_KEY || '';

class UserRepository {
  async create(username: string): Promise<UserWithToken> {
    const token = jwt.sign({username}, secretKey, { expiresIn: "1 day"});

    const newUser = await prisma.user.create({
      data: {
        username,
      }
    });

    return {token, ...newUser};
  }

  async authenticate(token: string): Promise<boolean> {
    try {
      const decodedToken: any = jwt.verify(token, secretKey);

      if (decodedToken.username) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

export const userRepository = new UserRepository();

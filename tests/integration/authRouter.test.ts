import jwt from "jsonwebtoken";
import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/prismaClient";

const secretKey = process.env.JWT_SECRET_KEY || '';

describe("GET /auth", () => {
  it("should return status 200 when send the correct token", async () => {
    const user = await prisma.user.create({
      data: {
        username: "Fulano",
      }
    });

    const token = jwt.sign({username: "Fulano"}, secretKey);

    const result = await supertest(app).get("/api/auth").set({Authorization: token});

    expect(result.status).toEqual(200);
  });

  it("should return status 403 when send a incorrect token", async () => {
    const token = jwt.sign({username: "João Silva"}, secretKey);

    const result = await supertest(app).get("/api/auth").set({Authorization: token});

    expect(result.status).toEqual(403);
  });

  it("should return status 400 when dont send token", async () => {
    const result = await supertest(app).get("/api/auth");

    expect(result.status).toEqual(400);
  });
});
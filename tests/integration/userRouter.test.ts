import supertest from "supertest";
import app from "../../src/app";

describe("POST /users", () => {
  it("given a valid task it should return 201", async () => {
    const body = {
      username: "Fulano",
    };

    const result = await supertest(app).post("/api/users").send(body);

    expect(result.status).toEqual(201);
    expect(result.body).toEqual({
      id: expect.any(String),
      username: body.username,
      token: expect.any(String)
    });

});
})
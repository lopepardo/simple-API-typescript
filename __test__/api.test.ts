import request from "supertest";
import app from "../src/app";

describe("GET /api", () => {
  it("should return a message", async () => {
    const token = await request(app)
      .get("/api/login")
      .send({ user: "user", pass: "pass" })
      .then((res) => res.body.token);

    const response = await request(app)
      .get("/api")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("Successful!");
  });
});

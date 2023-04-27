import request from "supertest";
import app from "../src/app";

describe("GET /api", () => {
  it("should return a message", async () => {
    const response = await request(app).get("/api");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("Successful!");
  });
});

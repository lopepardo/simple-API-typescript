import { Request, Response } from "express";
import { loadApiEndpoints } from "../src/controllers/api";

test("Debería responder con un estado 200 y mensaje '¡Exitosamente!'", () => {
  const req = jest.fn<Request>(() => ({}))();
  const res = jest.fn<Response>(() => ({
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  }))();

  loadApiEndpoints(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith("¡Exitosamente!");
});

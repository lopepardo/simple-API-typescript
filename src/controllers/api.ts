import { Request, Response } from "express";

export const loadApiEndpoints = (req: Request, res: Response) => {
  return res.status(200).send("¡Exitosamente!");
};

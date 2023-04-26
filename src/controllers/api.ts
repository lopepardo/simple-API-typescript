import { NextFunction, Request, Response } from "express";

export const loadApiEndpoints = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({ status: "Successful!" });
  } catch (error) {
    console.log("Error in loadApiEndpoints: ", error);
    next(error);
  }
};

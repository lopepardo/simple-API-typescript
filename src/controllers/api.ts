import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const loadApiEndpoints = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(StatusCodes.OK).json({ status: "Successful!" });
  } catch (error) {
    console.log("Error in loadApiEndpoints: ", error);
    next(error);
  }
};

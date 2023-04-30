import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { StatusCodes } from "http-status-codes";

const secretKey = String(process.env.SECRET_KEY);

// Controller to generate JWT Access Token
export const generateJWTAccess = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { user } = req.body;
    const token = jwt.sign({ user }, secretKey, {
      expiresIn: "1h",
    });
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log("Error in generateTokenAccess: ", error);
    next(error);
  }
};

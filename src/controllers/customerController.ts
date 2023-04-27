import { NextFunction, Request, Response } from "express";
import {
  Customer,
  getCustomers,
  getCustomerById,
  createCustomer,
} from "../models/customerModel";
import { StatusCodes } from "http-status-codes";

export const getCustomersHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const customers = getCustomers();
    res.status(StatusCodes.OK).json(customers);
  } catch (error) {
    console.log("Error in getCustomersHandler: ", error);
    next(error);
  }
};

export const getCustomerByIdHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const customerId = parseInt(req.params.id);
    const customer = getCustomerById(customerId);
    res.status(StatusCodes.OK).json(customer);
  } catch (error) {
    console.log("Error in getCustomerByIdHandler: ", error);
    next(error);
  }
};

export const createCustomerHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const newCustomer: Customer = req.body;
    const createdCustomer = createCustomer(newCustomer);
    res.status(StatusCodes.CREATED).json(createdCustomer);
  } catch (error) {
    console.log("Error in createCustomerHandler: ", error);
    next(error);
  }
};

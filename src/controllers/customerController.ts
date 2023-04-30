import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
// ------------------ Import Models ------------------
import {
  Customer,
  getCustomers,
  getCustomerById,
  createCustomer,
} from "../models";

// Controller to get all customers
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

// Controller to get customer by id
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

// Controller to create a new customer
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

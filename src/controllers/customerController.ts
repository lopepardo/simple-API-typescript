import { Request, Response } from "express";
import {
  Customer,
  getCustomers,
  getCustomerById,
  createCustomer,
} from "../models/customerModel";

const getCustomersHandler = (req: Request, res: Response): void => {
  const customers = getCustomers();
  res.json(customers);
};

const getCustomerByIdHandler = (req: Request, res: Response): void => {
  const customerId = parseInt(req.params.id);
  const customer = getCustomerById(customerId);

  if (customer) {
    res.json(customer);
  } else {
    res
      .status(404)
      .json({ message: `Customer with ID ${customerId} not found` });
  }
};

const createCustomerHandler = (req: Request, res: Response): void => {
  const newCustomer: Customer = req.body;
  const createdCustomer = createCustomer(newCustomer);
  res.status(201).json(createdCustomer);
};

export { getCustomersHandler, getCustomerByIdHandler, createCustomerHandler };

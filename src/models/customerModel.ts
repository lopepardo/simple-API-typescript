import { StatusCodes } from "http-status-codes";
import { ErrorHandler } from "../middlewares";

export interface Customer {
  id: number;
  name: string;
  email: string;
}

export const customers: Customer[] = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", email: "bobsmith@example.com" },
];

export const getCustomers = (): Customer[] => {
  if (customers.length === 0) {
    throw new ErrorHandler(StatusCodes.NOT_FOUND, "No customers found");
  }
  return customers;
};

export const getCustomerById = (id: number): Customer | undefined => {
  const costumer = customers.find((c) => c.id === id);
  if (!costumer) {
    throw new ErrorHandler(
      StatusCodes.NOT_FOUND,
      `Customer with ID ${id} not found`
    );
  }
  return costumer;
};

export const createCustomer = (customer: Customer): Customer => {
  const newCustomer = { ...customer, id: customers.length + 1 };
  customers.push(newCustomer);
  return newCustomer;
};

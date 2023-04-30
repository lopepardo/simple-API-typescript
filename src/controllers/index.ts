import { endpointExample } from "./api";
import {
  getCustomersHandler,
  getCustomerByIdHandler,
  createCustomerHandler,
} from "./customerController";
import { generateJWTAccess } from "./loginController";

export {
  generateJWTAccess,
  endpointExample,
  getCustomersHandler,
  getCustomerByIdHandler,
  createCustomerHandler,
};

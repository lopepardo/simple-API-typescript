import express from "express";

// ----- Controllers -----
import {
  getCustomersHandler,
  getCustomerByIdHandler,
  createCustomerHandler,
} from "../controllers/customerController";

// ----- Middlewares -----
import { validateBodyRequest } from "../middlewares";

// ----- Validation schemas -----
import { customerSchema } from "../validation-schemas/customerValidations";

const router = express.Router();

// Ruta para obtener todos los clientes
router.get("/", getCustomersHandler);

// Ruta para obtener un cliente por ID
router.get("/:id", getCustomerByIdHandler);

// Ruta para crear un nuevo cliente
router.post("/", validateBodyRequest(customerSchema), createCustomerHandler);

export { router as customerRoutes };

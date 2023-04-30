import express from "express";
// ------------------ Import Controllers ------------------
import {
  getCustomersHandler,
  getCustomerByIdHandler,
  createCustomerHandler,
} from "../controllers";
// ------------------ Import Middlewares ------------------
import { validateBodyRequest } from "../middlewares";
// ------------------ Import Validation Schemas ------------------
import { customerSchema } from "../validation-schemas";

const router = express.Router();

// GET /api/customers -> Get all customers
router.get("/", getCustomersHandler);

// GET /api/customers/:id -> Get customer by id
router.get("/:id", getCustomerByIdHandler);

// POST /api/customers -> Create a new customer
router.post("/", validateBodyRequest(customerSchema), createCustomerHandler);

export { router as customerRoutes };

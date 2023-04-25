import express from "express";
import {
  getCustomersHandler,
  getCustomerByIdHandler,
  createCustomerHandler,
} from "../controllers/customerController";

const router = express.Router();

// Ruta para obtener todos los clientes
router.get("/", getCustomersHandler);

// Ruta para obtener un cliente por ID
router.get("/:id", getCustomerByIdHandler);

// Ruta para crear un nuevo cliente
router.post("/", createCustomerHandler);

export { router as customerRoutes };

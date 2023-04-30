import express from "express";
// ------------------ Import Routes ------------------
import { customerRoutes } from "./customerRoutes";
// ------------------ Import Middlewares ------------------
import { validateBodyRequest, authMiddleware } from "../middlewares";
// ------------------ Import Controllers ------------------
import { generateJWTAccess, endpointExample } from "../controllers";
// ------------------ Import Validation Schemas ------------------
import { loginSchema } from "../validation-schemas";

const router = express.Router();

// GET /api/login -> Generate JWT Access Token
router.get("/login", validateBodyRequest(loginSchema), generateJWTAccess);

// GET /api/ -> Endpoint example with auth middleware
router.get("/", authMiddleware, endpointExample);

// Customer routes with auth middleware
router.use("/customers", authMiddleware, customerRoutes);

// Example other routes
// router.use("/products", productRoutes);
// router.use("/orders", orderRoutes);

export default router;

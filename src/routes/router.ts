import express from "express";

import { customerRoutes } from "./customerRoutes";

import { loadApiEndpoints } from "../controllers/api";
import { generateJWTAccess } from "../controllers/loginController";
import { loginSchema } from "../validation-schemas/loginValidations";

import { validateBodyRequest, authMiddleware } from "../middlewares";

const router = express.Router();

router.get("/login", validateBodyRequest(loginSchema), generateJWTAccess);

router.get("/", authMiddleware, loadApiEndpoints);

router.use("/customers", authMiddleware, customerRoutes);

// router.use("/products", productRoutes);

// router.use("/orders", orderRoutes);

export default router;

import express from "express";
import { loadApiEndpoints } from "../controllers/api";
import { customerRoutes } from "./customerRoutes";

const router = express.Router();

// TODO: Agregar validación de entrada de datos
// TODO: protección contra ataques XSS, CSRF y SQL injection
router.get("/", loadApiEndpoints);

router.use("/customers", customerRoutes);

// router.use("/products", productRoutes);

// router.use("/orders", orderRoutes);

export default router;

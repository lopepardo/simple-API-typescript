import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/router";

import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import { routeNotFoundMiddleware } from "./middlewares/routeNotFoundMiddleware";

dotenv.config({ path: "./env/.env" });

const app = express();

// ------------------ Server config ------------------
// Production env config
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "./env/.env.production" });
}

// TODO: Logger middleware (winston y debug)

// Morgan middleware config
app.use(morgan("dev"));

// Port config
app.set("port", process.env.PORT ?? 3001);

// Cors config
app.use(cors({ origin: "*" }));

// JSON body config
app.use(express.json());

// Routers config
app.use("/api", router);

// Error Handler Middleware
app.use(errorHandlerMiddleware);

// Route not found handler middleware
app.use(routeNotFoundMiddleware);

export default app;

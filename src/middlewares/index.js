import express from "express";
import { jwtService } from "../libs/index.js";
import cookieParser from "cookie-parser";
import winston from "winston";
import Logger from "../helpers/logger.js";
import morgan from "morgan";
import csurf from "csurf";

// middlewares
import AuthMiddleware from "./auth.js";

// initialize middlewares with dependencies injection
const auth = new AuthMiddleware(jwtService);
const logger = new Logger(winston);
const csrf = csurf({ cookie: true });

//export all custom middlewares
export { auth, logger, csrf };

//export default api middlewares
export default {
  urlencoded: express.urlencoded({ extended: false }),
  json: express.json(),
  cookieParser: cookieParser(),
  apiLogger: morgan("combined", { stream: logger.stream }),
  csrf,
};

import { Router } from "express";
import login from "./controllers/login.js";
import register from "./controllers/register.js";
import apiDocs from "./controllers/devDocs.js";
import swaggerUi from "swagger-ui-express";

const routes = new Router();

routes.post("/login", login);
routes.post("/register", register);
routes.use("/api-docs", swaggerUi.serve, apiDocs);

export default routes;

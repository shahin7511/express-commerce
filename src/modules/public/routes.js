import { Router } from "express";
import login from "./controllers/login.js";
import apiDocs from "./controllers/devDocs.js";
import swaggerUi from "swagger-ui-express";

const routes = new Router();

routes.get("/login", login);
routes.use("/api-docs", swaggerUi.serve, apiDocs);

export default routes;

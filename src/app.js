import {} from "dotenv/config";
import express from "express";
import routes from "./modules/public/routes.js";
const app = express();

app.use(routes);

export default app;

import {} from "dotenv/config";
import express from "express";
import routes from "./modules/public/routes.js";
import bodyParser from "body-parser";

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(jsonParser, urlencodedParser);

app.use(routes);

export default app;

import {} from "dotenv/config";
import express from "express";

const app = express();
import { create } from "./services/attribute/attribute.js";
app.get("/", async (req, res) => {
  create({ name: "red", required: true, type: "text" });
  // res.statusCode = 200;
  res.send("Helllo world");
});
export default app;

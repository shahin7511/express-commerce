import {} from "dotenv/config";
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  res.statusCode = 200;
  res.send("Helllo world");
});
export default app;

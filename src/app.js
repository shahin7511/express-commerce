import {} from "dotenv/config";
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  console.log(
    await (
      await import("../src/services/attribute/AttributeService.js")
    ).default.create({
      name: "Color",
      required: true,
      type: "text",
    })
  );
  res.statusCode = 200;
  res.send("Helllo world");
});
export default app;

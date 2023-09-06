const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");

const fs = require("fs");
const YAML = require("yaml");
const { log } = require("console");

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(
    (() => {
      log("loading");
      const file = fs.readFileSync("./oas.yaml", "utf8");
      const swaggerDocument = YAML.parse(file);
      return swaggerDocument;
    })()
  )
);

app.listen(8086, () => {
  console.log(`Swagger UI listening on port 8806`);
});

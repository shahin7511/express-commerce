import * as fs from "fs";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = () => {
  const url = new URL("../../../../resources/open-api-specification.yaml", import.meta.url);
  const file = fs.readFileSync(url.pathname, "utf8");
  const swaggerDocument = YAML.parse(file);
  return swaggerDocument;
};

const apiDocs = () => {
    return swaggerUi.setup(swaggerDocument());
};

export default apiDocs();

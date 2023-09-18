import {} from "dotenv/config";
import AttributeService from "../../services/attribute/AttributeService.js";
import db from "../../services/db/index.js";

const data = [
  {
    name: "Color",
    type: "text",
  },
  {
    name: "Height",
    type: "number",
  },
  {
    name: "Width",
    type: "number",
  },
  {
    name: "Size",
    type: "number",
  },
  {
    name: "Origin",
    type: "number",
  },
];
const seed = async () => {
  await AttributeService.deleteAll({});
  await AttributeService.createMany(data);
};

seed().then(() => {
  db.connection.close();
});

import Attribute from "../../models/Attribute.js";

const create = (data) => {
  return Attribute.create(data);
};

export { create };

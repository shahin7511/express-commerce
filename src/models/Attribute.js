import db from "../services/db/index.js";
const schema = {
  name: {
    type: String,
    required: true,
    max: 40,
  },
  type: {
    type: String,
    required: true,
    max: 6,
    enum: ["text", "boolean", "number"],
  },
  required: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const Attribute = db.model("Attribute", schema);

export default Attribute;

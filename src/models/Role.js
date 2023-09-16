import mongoose from "mongoose";
import db from "../services/db/index.js";
const schema = {
  name: {
    type: String,
    max: 30,
    required: true,
    validate: {
      validator: (v) => {
        var re = /[a-zA-Z0-9]$/;
        return !v || !v.trim().length || re.test(v);
      },
      message: "Provided role name is invalid.",
    },
  },
  disabled: {
    type: Boolean,
    required: true,
    default: true,
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
};
const Role = db.model("Role", schema);
export default Role;

import db from "../services/db/index.js";
import mongoose from "mongoose";
const schema = {
  name: {
    type: String,
    max: 50,
    validate: {
      validator: (v) => {
        const re = /[a-zA-Z]/;
        return v && re.test(v);
      },
      message: "Invalid category name",
    },
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
  user: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
  ],
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
  ],
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: false,
    },
  ],
};

const Category = db.model("Category", schema);

export default Category;

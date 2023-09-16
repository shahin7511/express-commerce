import mongoose from "mongoose";
import db from "../services/db/index.js";
const schema = {
  title: {
    type: String,
    required: true,
    max: 200,
  },
  slug: {
    type: String,
    required: true,
    max: 200,
  },
  description: {
    type: String,
    max: 4000,
    required: true,
  },
  productImage: [
    {
      type: mongoose.Types.ObjectId,
      ref: "ProductImage",
    },
  ],
  published: {
    type: Boolean,
    required: false,
    default: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
};
const Product = db.model("Product", schema);
export default Product;

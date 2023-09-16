import mongoose from "mongoose";
import db from "../services/db/index.js";

const schema = {
  alt: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  orignal_name: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
};

const ProductImage = db.model("ProductImage", schema);

export default ProductImage;

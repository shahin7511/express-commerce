import BaseModelService from "../BaseModelService";
import Product from "../../models/Product.js";

class ProductService extends BaseModelService {}

export default new ProductService(Product);

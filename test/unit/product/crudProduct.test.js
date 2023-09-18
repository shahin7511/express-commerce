import {} from "../bootstrap.js";
import CategoryService from "../../../src/services/category/CategoryService.js";
import UserService from "../../../src/services/user/UserService.js";
import ProductService from "../../../src/services/product/ProductService.js";
import ProductImageService from "../../../src/services/product/ProductImageService.js";

afterEach(async () => {
  await ProductImageService.deleteAll({});
  await ProductService.deleteAll({});
  await CategoryService.deleteAll({});
  await UserService.deleteAll({});
});

describe("Product CRUD Test", () => {
  const userData = {
    first_name: "Shahin",
    last_name: "Shahin",
    email: "Shahin@gmail.com",
    password: "password",
  };

  const categoryData = {
    name: "Bonsai",
    disabled: false,
    user: null,
  };

  const productImageData = {
    url: "https://cdn.britannica.com/65/123265-050-F0F8FD6B/bonsai-cypress-National-Bonsai-and-Penjing-Museum.jpg",
    alt: "National-Bonsai-and-Penjing-Museum",
    original_name: "bonsai-cypress-National-Bonsai-and-Penjing-Museum.jpg",
    product: null,
  };

  test("Crate Product Test", async () => {
    const user = await UserService.create(userData);
    categoryData.user = user._id;
    const category = await CategoryService.create(categoryData);
    const productImage = await ProductImageService.create(productImageData);
    const data = {
      title: "title",
      slug: "slug",
      description: "description",
      productImage: [productImage._id],
      published: true,
      updated_at: new Date(),
      user: user._id,
      categories: [category._id],
    };

    const product = await ProductService.create(data);
    const updatedProductImage = await ProductImageService.update(
      productImage._id,
      {
        product: product._id,
      }
    );

    expect(product).toHaveProperty("_id");
    expect(updatedProductImage).toHaveProperty("modifiedCount", 1);
  });
});

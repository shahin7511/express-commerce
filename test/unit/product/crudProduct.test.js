import {} from "../bootstrap.js";
import categoryService from "../../../src/services/category/CategoryService.js";
import userService from "../../../src/services/user/UserService.js";
import productService from "../../../src/services/product/ProductService.js";
import productImageService from "../../../src/services/product/ProductImageService.js";
import hashService from '../../../src/services/auth/HashService.js'

afterEach(async () => {
  await productImageService.deleteAll({});
  await productService.deleteAll({});
  await categoryService.deleteAll({});
  await userService.deleteAll({});
});

describe("Product CRUD Test", () => {
  const userData = {
    first_name: "Shahin",
    last_name: "Shahin",
    email: "Shahin@gmail.com",
    password: hashService.make('password'),
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

  test("Create Product test", async () => {
    const user = await userService.create(userData);
    categoryData.user = user._id;
    const category = await categoryService.create(categoryData);
    const productImage = await productImageService.create(productImageData);
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

    const product = await productService.create(data);
    const updatedProductImage = await productImageService.update(
      productImage._id,
      {
        product: product._id,
      }
    );

    expect(product).toHaveProperty("_id");
    expect(updatedProductImage).toHaveProperty("modifiedCount", 1);
  });

  test("Update Product test", async () => {
    const user = await userService.create(userData);
    categoryData.user = user._id;
    const category = await categoryService.create(categoryData);
    const productImage = await productImageService.create(productImageData);
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

    const product = await productService.create(data);
    const updatedProductImage = await productImageService.update(
      productImage._id,
      {
        product: product._id,
      }
    );

    data["title"] = "Title updated";

    const result = await productService.update(product._id, data);

    const updatedProduct = await productService.find(product._id);

    expect(updatedProduct).toHaveProperty("title", data.title);
    expect(result).toHaveProperty("modifiedCount", 1);
    expect(updatedProductImage).toHaveProperty("modifiedCount", 1);
  });

  test("Delete Product test", async () => {
    const user = await userService.create(userData);
    categoryData.user = user._id;
    const category = await categoryService.create(categoryData);
    const productImage = await productImageService.create(productImageData);
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

    const product = await productService.create(data);

    const deletedProduct = await productService.delete(product._id);
    const deletedImage = await productImageService.delete(productImage._id);
    const deletedCategory = await categoryService.delete(category._id);
    const deletedUser = await userService.delete(user._id);

    expect(deletedProduct).toHaveProperty("deletedCount", 1);
    expect(deletedImage).toHaveProperty("deletedCount", 1);
    expect(deletedCategory).toHaveProperty("deletedCount", 1);
    expect(deletedUser).toHaveProperty("deletedCount", 1);
  });
  
  test("Find Product test", async () => {
    const user = await userService.create(userData);
    categoryData.user = user._id;
    const category = await categoryService.create(categoryData);
    const productImage = await productImageService.create(productImageData);
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

    const product = await productService.create(data);

    const result = await productService.find(product._id);

    expect(result).toHaveProperty('_id')
    
  });
});

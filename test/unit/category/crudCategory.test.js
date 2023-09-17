import {} from "../bootstrap.js";
import CategoryService from "../../../src/services/category/CategoryService.js";
import UserService from "../../../src/services/user/UserService.js";

afterEach(async () => {
  await CategoryService.deleteAll({});
  await UserService.deleteAll({});
});

describe("CRUD Category test", () => {
  const data = {
    name: "Bonsai",
    disabled: false,
    user: null,
  };
  const userData = {
    first_name: "Shahin",
    last_name: "Shahin",
    email: "Shahin@gmail.com",
    password: "password",
  };
  const productImageData = {
    url: "https://cdn.britannica.com/65/123265-050-F0F8FD6B/bonsai-cypress-National-Bonsai-and-Penjing-Museum.jpg",
    alt: "National-Bonsai-and-Penjing-Museum",
    original_name: "bonsai-cypress-National-Bonsai-and-Penjing-Museum.jpg",
    product: null,
  };

  test("Create Category test", async () => {
    const user = await UserService.create(userData);
    data.user = user._id;

    const category = await CategoryService.create(data);
    expect(category).toHaveProperty("_id");
  });

  test("Update Category test", async () => {
    const user = await UserService.create(userData);
    data.user = user._id;
    const category = await CategoryService.create(data);

    const patchData = {
      name: "BOnsai",
    };

    const result = await CategoryService.update(category._id, patchData);
    const updatedCategory = await CategoryService.find(category._id);

    expect(result).toHaveProperty("modifiedCount", 1);
    expect(updatedCategory).toHaveProperty("name", patchData.name);
  });

  test("Delete Category test", async () => {
    const user = await UserService.create(userData);
    data.user = user._id;
    const category = await CategoryService.create(data);
    const result = await CategoryService.delete(category._id);
    expect(result).toHaveProperty("deletedCount", 1);
  });

  test("Find Category test", async () => {
    const user = await UserService.create(userData);
    data.user = user._id;
    const category = await CategoryService.create(data);
    const result = await CategoryService.find(category._id);
    expect(result).toHaveProperty("_id");
  });
});

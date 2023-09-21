import {} from "../bootstrap.js";
import categoryService from "../../../src/services/category/CategoryService.js";
import userService from "../../../src/services/user/UserService.js";

afterEach(async () => {
  await categoryService.deleteAll({});
  await userService.deleteAll({});
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

  test("Create Category test", async () => {
    const user = await userService.create(userData);
    data.user = user._id;

    const category = await categoryService.create(data);
    expect(category).toHaveProperty("_id");
  });

  test("Update Category test", async () => {
    const user = await userService.create(userData);
    data.user = user._id;
    const category = await categoryService.create(data);

    const patchData = {
      name: "BOnsai",
    };

    const result = await categoryService.update(category._id, patchData);
    const updatedCategory = await categoryService.find(category._id);

    expect(result).toHaveProperty("modifiedCount", 1);
    expect(updatedCategory).toHaveProperty("name", patchData.name);
  });

  test("Delete Category test", async () => {
    const user = await userService.create(userData);
    data.user = user._id;
    const category = await categoryService.create(data);
    const result = await categoryService.delete(category._id);
    expect(result).toHaveProperty("deletedCount", 1);
  });

  test("Find Category test", async () => {
    const user = await userService.create(userData);
    data.user = user._id;
    const category = await categoryService.create(data);
    const result = await categoryService.find(category._id);
    expect(result).toHaveProperty("_id");
  });
});

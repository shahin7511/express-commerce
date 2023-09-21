import {} from "../bootstrap.js";
import roleService from "../../../src/services/role/RoleService.js";

afterEach(async () => {
  await roleService.deleteAll({});
});

describe("Role CRUD Test", () => {
  const data = {
    name: "Admin",
    disabled: true,
  };
  test("Create Role test", async () => {
    const role = await roleService.create(data);
    return expect(role).toHaveProperty("_id");
  });

  test("Update Role test", async () => {
    const patchData = {
      name: "Admin A",
    };
    const role = await roleService.create(data);
    const result = await roleService.update(role._id, patchData);
    const updateRole = await roleService.find(role._id);
    expect(result).toHaveProperty("modifiedCount", 1);
    expect(updateRole).toHaveProperty("name", patchData.name);
  });

  test("Delete Role test", async () => {
    const role = await roleService.create(data);
    const result = await roleService.delete(role._id);
    expect(result).toHaveProperty("deletedCount", 1);
  });

  test("Find Role test", async () => {
    const role = await roleService.create(data);
    const result = await roleService.find(role._id);
    expect(result).toHaveProperty("_id");
  });
});

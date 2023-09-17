import {} from "../bootstrap.js";
import RoleService from "../../../src/services/role/RoleService.js";

afterEach(() => {
  RoleService.deleteAll([]);
});

describe("Role CRUD Test", () => {
  const data = {
    name: "Admin",
    disabled: true,
  };
  test("Create Role test", async () => {
    const role = await RoleService.create(data);
    return expect(role).toHaveProperty("_id");
  });

  test("Update Role test", async () => {
    const patchData = {
      name: "Admin A",
    };
    const role = await RoleService.create(data);
    const result = await RoleService.update(role._id, patchData);
    const updateRole = await RoleService.find(role._id);
    expect(result).toHaveProperty("modifiedCount", 1);
    expect(updateRole).toHaveProperty("name", patchData.name);
  });

  test("Delete Role test", async () => {
    const role = await RoleService.create(data);
    const result = await RoleService.delete(role._id);
    expect(result).toHaveProperty("deletedCount", 1);
  });

  test("Find Role test", async () => {
    const role = await RoleService.create(data);
    const result = await RoleService.find(role._id);
    expect(result).toHaveProperty("_id");
  });
});

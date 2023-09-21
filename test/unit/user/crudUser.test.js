import {} from "../bootstrap.js";
import roleService from "../../../src/services/role/RoleService.js";
import userService from "../../../src/services/user/UserService.js";
import hashService from "../../../src/services/auth/HashService.js";


afterEach(async ()=> {
  await roleService.deleteAll({});
  await userService.deleteAll({});
})


describe("User CRUD Test", () => {
  const data = {
    first_name: "Shahin",
    last_name: "Shahin",
    email: "Shahin@gmail.com",
    password: hashService.make("password"),
  };
  const roleData = {
    name: "Admin",
    disabled: true,
  };

  test("Create user test", async () => {
    const role = await roleService.create(roleData);
    data.roles = [role._id];
    const user = await userService.create(data);
    const roleUpdated = await roleService.addUserToRole(role._id, user._id);
    expect(user).toHaveProperty("_id");
    expect(roleUpdated).toHaveProperty("users");
    expect(roleUpdated.users.includes(user._id)).toBe(true);
  });
  
  test("Update user test", async () => {
    const role = await roleService.create(roleData);
    data.roles = [role._id];
    const user = await userService.create(data);
    const roleUpdated = await roleService.addUserToRole(role._id, user._id);
    const updatedResult = await userService.update(user._id, {... data, first_name: 'Jamidar'})
    expect(updatedResult).toHaveProperty("modifiedCount", 1);

    const updatedUser = await userService.find(user._id);

    expect(updatedUser).toHaveProperty("first_name", "Jamidar");
    expect(roleUpdated).toHaveProperty("users");
    expect(roleUpdated.users.includes(user._id)).toBe(true);
  });


  test("Delete user test", async () => {
    const role = await roleService.create(roleData);
    data.roles = [role._id];
    const user = await userService.create(data);
    let roleUpdated = await roleService.addUserToRole(role._id, user._id);
    expect(roleUpdated).toHaveProperty("users");
    expect(roleUpdated.users.includes(user._id)).toBe(true);

    roleUpdated = await roleService.removeUserFromRole(role._id, user._id);
    expect(roleUpdated.users.includes(user._id)).toBe(false);
    const userUpdated = await userService.removeRole(user._id, role._id);
    expect(userUpdated.roles.includes(role._id)).toBe(false);
    const deletedResult = await userService.delete(user._id);
    expect(deletedResult).toHaveProperty('deletedCount', 1);
  });

  
  test("Delete user test", async () => {
    const role = await roleService.create(roleData);
    data.roles = [role._id];
    const user = await userService.create(data);
    let roleUpdated = await roleService.addUserToRole(role._id, user._id);
    expect(roleUpdated).toHaveProperty("users");
    expect(roleUpdated.users.includes(user._id)).toBe(true);
    const foundUser = await userService.find(user._id);
    expect(foundUser).toHaveProperty("first_name", user.first_name);

  });
});

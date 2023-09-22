import User from "../../models/User.js";
import BaseModelService from "../BaseModelService.js";
import roleService from "../role/RoleService.js";

class UserService extends BaseModelService {
  addRole(userId, roleId) {
    return this.model.findByIdAndUpdate(
      userId,
      { $addToSet: { roles: roleId } },
      { upsert: true, returnOriginal: false }
    );
  }
  removeRole(userId, roleId) {
    return this.model.findByIdAndUpdate(
      userId,
      { $pull: { roles: roleId } },
      { upsert: true, returnOriginal: false }
    );
  }

  async register(data) {
    const customerRole = await roleService.findOne({ name: "Customer" });
    if (!customerRole) {
      throw Error("Registration failed!");
    }
    data.roles = [customerRole._id];
    const user = await this.create(data);
    delete user.password;
    return user;
  }
}

export default new UserService(User);

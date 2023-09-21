import Role from "../../models/Role.js";
import BaseModelService from "../BaseModelService";

class RoleService extends BaseModelService {
    addUserToRole(roleId, userId){
        return this.model.findByIdAndUpdate(
            roleId,
            { $addToSet: { users: userId } },
            { upsert: true , returnOriginal: false}
          );
    }
    removeUserFromRole(roleId, userId){
        return this.model.findByIdAndUpdate(
            roleId,
            { $pull: { users: userId } },
            { upsert: true , returnOriginal: false}
          );
    }
}

export default new RoleService(Role);

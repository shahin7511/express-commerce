import User from "../../models/User.js";
import BaseModelService from "../BaseModelService.js";
class UserService extends BaseModelService {
    addRole(userId, roleId){
        return this.model.findByIdAndUpdate(
            userId,
            { $addToSet: { roles: roleId } },
            { upsert: true , returnOriginal: false}
          );
    }
    removeRole(userId, roleId){
        return this.model.findByIdAndUpdate(
            userId,
            { $pull: { roles: roleId } },
            { upsert: true , returnOriginal: false}
          );
    }
}

export default new UserService(User);

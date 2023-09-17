import User from "../../models/User.js";
import BaseModelService from "../BaseModelService.js";
class UserService extends BaseModelService {}

export default new UserService(User);

import userService from "../../../services/user/UserService.js";
import hashService from "../../../services/auth/HashService.js";
const register = async (req, res) => {
  const validated = {
    ...req.body,
    password: hashService.make(req.body.password),
  };
  const user = await userService.register(validated);
  return res.status(201).json(user);
};

export default register;

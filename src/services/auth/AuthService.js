import userService from "../user/UserService.js";
import hashService from "./HashService.js";
import tokenService from "./JwtService.js";
class AuthService {
  async login(email, password) {
    const user = await userService.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid credentials!");
    }
    const matched = hashService.compare(password, user.password);
    if (matched) {
      delete user.password;
      return tokenService.generateToken(user._doc);
    }
    throw new Error("Invalid credentials!");
  }
}

export default new AuthService();

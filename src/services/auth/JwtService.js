import jwt from "jsonwebtoken";

class JWTService {
  generateToken(payload) {
    try {
      const accessToken = jwt.sign(payload, process.env.JWT_PASSWORD, {
        expiresIn: 1 * 24 * 60 * 60,
        algorithm: "HS256",
      });
      const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_PASSWORD, {
        expiresIn: 3 * 24 * 60 * 60,
        algorithm: "HS256",
      });
      return { accessToken, refreshToken };
    } catch (e) {
      console.log(e);
      throw new Error("Internal server error");
    }
  }

  refreshToken(token) {
    try {
      const payload = this.verifyToken(token);
      const tokenPayload = {
        _id: payload._id,
        name: payload.name,
        email: payload.email,
      };
      return this.generateToken(tokenPayload);
    } catch (e) {
      console.log(e);
      throw new Error("Internal server error");
    }
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_PASSWORD, {
        expiresIn: 3 * 24 * 60 * 60,
        algorithm: "HS256",
      });
    } catch (e) {
      console.log(e);
      throw new Error("Internal server error");
    }
  }
}

export default new JWTService();

import jwt from "jsonwebtoken";

class JWTService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_PASSWORD, {
      expiresIn: 1 * 24 * 60 * 60,
      algorithm: "HS256",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_PASSWORD, {
      expiresIn: 3 * 24 * 60 * 60,
      algorithm: "HS256",
    });
    return { accessToken, refreshToken };
  }

  refreshToken(token) {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_PASSWORD, {
      expiresIn: 3 * 24 * 60 * 60,
      algorithm: "HS256",
    });
    const tokenPayload = {
      _id: payload._id,
      name: payload.name,
      email: payload.email,
    };
    return this.generateToken(tokenPayload);
  }
}

export default new JWTService();

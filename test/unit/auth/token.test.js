import JwtService from "../../../src/services/auth/JwtService.js";
import {} from "../bootstrap.js";

describe("Token generation, validation, refresh test", () => {
  const payload = {
    _id: "d0053c48bb9e672d6fed8499fee7c851",
    name: "Shahin Sheikh",
    email: "shahinsheikh.nrl@gmail.com",
  };

  test("genrate token test", () => {
    const tokens = JwtService.generateToken(payload);
    expect(tokens).toHaveProperty("accessToken");
    expect(tokens).toHaveProperty("refreshToken");
  });

  test("refresh token test", () => {
    const tokens = JwtService.generateToken(payload);
    const newTokens = JwtService.refreshToken(tokens.refreshToken);
    expect(newTokens).toHaveProperty("accessToken");
    expect(newTokens).toHaveProperty("refreshToken");
  });
});

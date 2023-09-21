import {} from "dotenv/config";
import hashService from "../../../src/services/auth/HashService.js";

describe("Hash and hash compare test", () => {
  test("Make and compare hash test", () => {
    const password = "48545646846323#@$$%";
    const hash = hashService.make(password);
    const matched = hashService.compare(password, hash);
    expect(matched).toBe(true);
  });
});

import {} from "dotenv/config";
import HashService from "../../../src/services/auth/HashService.js";

describe("Hash and hash compare test", () => {
  test("Make and compare hash test", () => {
    const password = "48545646846323#@$$%";
    const hash = HashService.make(password);
    const matched = HashService.compare(password, hash);
    expect(matched).toBe(true);
  });
});

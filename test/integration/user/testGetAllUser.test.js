import server from "./../bootstrap.js";

describe("test list all users", () => {
  test("GET /user should show all users", () => {
    return server.get("/").expect(200);
  });
});

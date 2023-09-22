import server from "../bootstrap.js";

describe("test login", () => {
  test("GET /login user", () => {
    return server
      .post("/login")
      .send({
        email: "shahinsheikh@apple.com",
        password: "password",
      })
      .expect("Content-Type", /application\/json/)
      .expect((res) => {
        res.body.accessToken != null;
        res.body.refreshToken != null;
      })
      .expect(200);
  });
});

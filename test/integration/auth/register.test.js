import server from "../bootstrap.js";

describe("test register user", () => {
  test("GET /user can submit register", () => {
    return server
      .post("/register")
      .send( {
        first_name: "Shahin",
        last_name: "Sheikh",
        email: "shahinsheikh@apple.com",
        password: "password",
      })
      .expect('Content-Type', /application\/json/)
      .expect(201);
  });
});

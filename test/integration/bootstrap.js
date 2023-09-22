import app from "../../src/app.js";
import request from "supertest";
import db from "../../src/services/db/index.js";
const server = request(app);
afterAll(() => {
  db.disconnect();
});
export default server;

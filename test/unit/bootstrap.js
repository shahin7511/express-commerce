import {} from "dotenv/config";
import db from "../../src/services/db/index.js";

beforeAll(() => {
  //   return initializeCityDatabase();
});

afterAll(() => {
  db.disconnect();
});

export default {};

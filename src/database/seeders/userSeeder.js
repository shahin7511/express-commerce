import {} from "dotenv/config";
import UserService from "../../services/user/UserService.js";
import db from "../../services/db/index.js";
import HashService from "../../services/auth/HashService.js"

const password = HashService.make('password');
const data = [
  {
    first_name: "Shahin",
    last_name: "Shahin",
    email: "Shahin@gmail.com",
    password: password,
  },
];
const seed = async () => {
  await UserService.deleteAll({});
  await UserService.createMany(data);
};

seed().then(() => {
  db.connection.close();
});

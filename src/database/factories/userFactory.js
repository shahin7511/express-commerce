import {} from "dotenv/config";
import UserService from "../../services/user/UserService.js";

const data = {
  first_name: "Shahin",
  last_name: "Shahin",
  email: "Shahin@gmail.com",
  password: "password",
};
UserService.create(data);

export default class UserFactory{

}

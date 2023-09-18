import {} from "dotenv/config";
import AttributeService from "../../services/category/CategoryService.js";
import UserService from "../../services/user/UserService.js";
import db from "../../services/db/index.js";

const user = await UserService.findOne({});

const data = [
  {
    name: "Bonsai",
    disabled: false,
    user: user._id,
  },
  {
    name: "China Bamboo",
    disabled: false,
    user: user._id,
  },
];

const seed = async () => {
  await AttributeService.deleteAll({});
  await AttributeService.createMany(data);
};

seed().then(() => {
  db.connection.close();
});

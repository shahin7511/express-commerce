import {} from "dotenv/config";
import AttributeService from "../../services/category/CategoryService.js";
import UserService from "../../services/user/UserService.js";



const seed = async () => {
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
  await AttributeService.deleteAll({});
  await AttributeService.createMany(data);
};

export default seed;

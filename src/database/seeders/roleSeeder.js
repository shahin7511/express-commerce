import {} from "dotenv/config";
import RoleService from "../../services/role/RoleService.js";


const data = [
  {
    name: "Admin",
    diable: false
  },
  {
    name: "Customer",
    diable: false
  },
];
const seed = async () => {

  await RoleService.deleteAll({});
  await RoleService.createMany(data);
};

export default seed;

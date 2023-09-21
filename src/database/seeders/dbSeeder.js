import roleSeeder from "./roleSeeder.js"
import userSeeder from "./userSeeder.js"
import attributeSeeder from "./attributeSeeder.js"
import categorySeeder from "./categorySeeder.js"
import db from "../../services/db/index.js"
(async ()=>{
    await roleSeeder();
    await userSeeder();
    await attributeSeeder();
    await categorySeeder();
    db.disconnect();
})()
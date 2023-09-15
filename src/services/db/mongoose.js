import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL).catch((error) => console.log(error));
// mongoose
//   .connect("mongodb://localhost:27017/ecommerce")
//   .catch((error) => console.log(error));
export default mongoose;

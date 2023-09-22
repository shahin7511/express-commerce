import mongoose from "mongoose";
import db from "../services/db/index.js";

const schema = {
  first_name: {
    type: String,
    max: 30,
    required: true,
    validate: {
      validator: (v) => {
        const re = /[a-zA-Z\s]/;
        return v && re.test(v);
      },
      message: "Invalid first name",
    },
  },
  last_name: {
    type: String,
    max: 30,
    required: true,
    validate: {
      validator: (v) => {
        const re = /[a-zA-Z\s]/;
        return v && re.test(v);
      },
      message: "Invalid last name",
    },
  },
  email: {
    type: String,
    max: 50,
    required: true,
    validate: {
      validator: (v) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return v && re.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  roles: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Role",
      requreid: true,
      nullable: false
    },
  ],
};

const User = db.model("User", schema);
export default User;

import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { UserType } from "../types";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema<UserType>(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;

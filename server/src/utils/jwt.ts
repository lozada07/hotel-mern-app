import jwt from "jsonwebtoken";
import { UserType } from "../types";

export const generateToken = (user: UserType) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "1d",
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
};

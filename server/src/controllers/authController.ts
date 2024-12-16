import { Request, Response } from "express";
import { resError } from "../utils/resError";
import { generateToken } from "../utils/jwt";
import User from "../models/userModel";
import { response } from "../utils/response";
import { errorHandler } from "../utils/errorHandler";
import bcryptjs from "bcryptjs";
import { sendMail } from "../config/nodemailer/nodemailer";
import { verifyToken as validateToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export const createAccount = errorHandler(
  async (req: Request, res: Response) => {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return resError(res, 400, "User already exists");
    }

    user = new User(req.body);

    await user.save();

    //Generate Token
    const token = generateToken(user);

    //Crate Cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
      sameSite: "none",
      domain: process.env.COOKIE_DOMAIN,
    });

    return response({
      res: res,
      status: 200,
      message: "User successfully registered",
    });
  }
);

export const login = errorHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return resError(res, 404, "User not found");
  }

  //Compared password
  const IsPasswordMatch = bcryptjs.compareSync(password, user.password);
  if (!IsPasswordMatch) {
    return resError(res, 401, "Invalid credentials");
  }

  //Generate token
  const token = generateToken(user);

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
    sameSite: "none",
    domain: process.env.COOKIE_DOMAIN,
  });
  return response({
    res: res,
    status: 200,
    message: "Login successfully",
  });
});

export const signOut = errorHandler(async (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
    domain: process.env.COOKIE_DOMAIN,
  });

  return response({
    res: res,
    status: 200,
    message: "Sign out successfully",
  });
});

export const verifyToken = errorHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user_id).select("-password");

  return response({
    res: res,
    status: 200,
    message: "Token is valid",
    data: user as object,
  });
});

export const forgotPassword = errorHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return resError(res, 400, "User not found");
    }

    const token = generateToken(user);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Sending Email using Node.js",
      template: "forgotPassword",
      context: {
        name: user.firstName,
        url: `${process.env.FRONTEND_URL}/reset-password/${token}`,
      },
    };

    //Sending Email
    sendMail(res, mailOptions);

    return response({
      res: res,
      status: 200,
      message: "Reset Password successfully",
    });
  }
);

export const resetPassword = errorHandler(
  async (req: Request, res: Response) => {
    const { token } = req.params;
    const { password } = req.body;

    if (!token) {
      return resError(res, 400, "Not token provided");
    }

    try {
      const decode = validateToken(token);

      const user = await User.findById((decode as JwtPayload).id);
      if (user) {
        user.password = password;
        await user?.save();
      }

      return response({
        res: res,
        status: 200,
        message: "Reset Password successfully",
        data: [user],
      });
    } catch (error) {
      return resError(res, 401, "Token Invalid");
    }
  }
);

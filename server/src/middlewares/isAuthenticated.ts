import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { resError } from "../utils/resError";

declare global {
  namespace Express {
    interface Request {
      user_id: string;
    }
  }
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { auth_token } = req.cookies;
  if (!auth_token) {
    return resError(res, 401, "No token, authorization denied");
  }

  try {
    const decode = verifyToken(auth_token);

    req.user_id = (decode as JwtPayload).id;

    next();
  } catch (error) {
    resError(res, 401, "No token, authorization denied");
  }
};

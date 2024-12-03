import { Request, NextFunction, Response } from "express";
import { resError } from "./resError";

export const errorHandler = (fc: Function) => {
  return (req: Request, res: Response) => {
    fc(req, res).catch((error: any) => {
      return resError(res, 500, "Something went wrong");
    });
  };
};

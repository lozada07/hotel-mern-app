import { ZodError, ZodObject } from "zod";
import { NextFunction, Request, Response } from "express";
import { resError } from "../utils/resError";

export const zodValidator =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = schema.parse(req.body);
      req.body = body;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        resError(
          res,
          400,
          error.issues.map((issues) => ` ${issues.message}`)
        );
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  };

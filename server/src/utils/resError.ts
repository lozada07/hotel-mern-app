import { Response } from "express";

export const resError = (
  res: Response,
  status: number,
  message: string[] | string
) => {
  return res.status(status).json({
    error: true,
    message,
    status,
  });
};

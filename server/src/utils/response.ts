import { Response } from "express";

type Props = {
  res: Response;
  status: number;
  message: string | "";
  data?: object | object[] | null;
  error?: boolean;
};

export const response = ({
  res,
  status,
  message,
  data,
  error = false,
}: Props) => {
  return res.status(status).json({
    error,
    message,
    data,
  });
};

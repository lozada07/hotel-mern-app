import { axiosConfig } from "../libs/axios/axiosConfig";
import { LoginType, PropsResetPasswordData, UserType } from "../types";

export const createAccount = async (data: UserType) => {
  const res = await axiosConfig.post("/auth/createAccount", data);
  return res.data;
};

export const loginAccount = async (data: LoginType) => {
  const res = await axiosConfig.post("/auth/login", data);
  return res.data;
};

export const signOutAccount = async () => {
  const res = await axiosConfig.post("/auth/signOut");
  return res.data;
};

export const forgotPassword = async (data: { email: string }) => {
  const res = await axiosConfig.post("/auth/forgot-password", data);
  return res.data;
};

export const resetPassword = async (data: PropsResetPasswordData) => {
  const res = await axiosConfig.post(
    `/auth/reset-password/${data.token}`,
    data.data
  );
  return res.data;
};

export const verifyToken = async () => {
  const res = await axiosConfig.get("/auth/verifyToken");
  return res.data;
};

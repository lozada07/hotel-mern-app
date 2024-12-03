import z from "zod";

export const SignUpSchema = z
  .object({
    firstName: z
      .string({ required_error: "firstName is required" })
      .min(2, "firstName is required"),
    lastName: z
      .string({ required_error: "lastName is required" })
      .min(2, "lastName is required"),
    email: z
      .string({ required_error: "email is required" })
      .email("email is required"),
    password: z
      .string({ required_error: "password is required" })
      .min(6, "password must be at least 6 characters"),
    confirmPassword: z.string({
      required_error: "confirmPassword is required",
    }),
  })
  .refine(
    (data) =>
      data.confirmPassword === undefined ||
      data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export const SignInSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email("Email is required"),
  password: z
    .string({ required_error: "password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string({ required_error: "password is required" })
      .min(6, "password must be at least 6 characters"),
    confirmPassword: z.string({ required_error: "confirmPassword is required" }),
  })
  .refine(
    (data) =>
      data.confirmPassword === undefined ||
      data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

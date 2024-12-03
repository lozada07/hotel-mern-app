import z from "zod";

export const SignUpSchema = z
  .object({
    firstName: z
      .string({ required_error: "This field is required" })
      .min(2, "firstName must be at least 2 characters"),
    lastName: z
      .string({ required_error: "This field is required" })
      .min(2, "lastName must be at least 2 characters"),
    email: z.string().email("This field is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
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
  email: z.string().email("This field is required"),
  password: z
    .string({ required_error: "This field is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
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

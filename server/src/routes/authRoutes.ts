import { Router } from "express";
import {
  createAccount,
  forgotPassword,
  login,
  resetPassword,
  signOut,
  verifyToken,
} from "../controllers/authController";
import { zodValidator } from "../middlewares/zodValidator";
import {
  ResetPasswordSchema,
  SignInSchema,
  SignUpSchema,
} from "../libs/zodSchemas/AuthSchema";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.post("/createAccount", zodValidator(SignUpSchema), createAccount);
router.post("/login", zodValidator(SignInSchema), login);
router.post("/forgot-password", forgotPassword);
router.post(
  "/reset-password/:token",
  zodValidator(ResetPasswordSchema),
  resetPassword
);
router.post("/signOut", isAuthenticated, signOut);
router.get("/verifyToken", isAuthenticated, verifyToken);

export default router;

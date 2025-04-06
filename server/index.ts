import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import cookieParse from "cookie-parser";
import helmet from "helmet";
import { accommodationRoutes, authRoutes } from "./src/routes";
import connectDB from "./src/config/db";
const app = express();

//!TODO: connect DB
connectDB();

//!TODO: Config APi
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//!TODO: Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/accommodation", accommodationRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `listening on http://localhost:${
      process.env.PORT ? process.env.PORT : 7000
    }`
  );
});

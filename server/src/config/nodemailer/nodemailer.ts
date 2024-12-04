import { Response } from "express";
import nodemailer from "nodemailer";

import hbs from "nodemailer-express-handlebars";
import path from "path";
import { resError } from "../../utils/resError";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.join(__dirname, "./templates"),
    defaultLayout: false,
  },
  viewPath: path.join(__dirname, "./templates"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions as any));

export const sendMail = (res: Response, mailOptions: any) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return resError(res, 500, "Something went wrong");
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

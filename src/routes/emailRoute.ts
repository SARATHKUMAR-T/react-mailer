import { Router } from "express";
import asyncHandler from "express-async-handler";
import { emailController } from "../controllers";

class EmailRoute {
  private static instance: EmailRoute;
  router = Router();
  private constructor() {
    this.initiateRoutes();
  }

  public static getInstance(): EmailRoute {
    if (!EmailRoute.instance) {
      EmailRoute.instance = new EmailRoute();
    }
    return EmailRoute.instance;
  }
  initiateRoutes() {
    this.router.route("/send").post(asyncHandler(emailController.emailSender));
  }
}

export const emailRouter = EmailRoute.getInstance();

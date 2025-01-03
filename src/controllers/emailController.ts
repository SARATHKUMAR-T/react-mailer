import { Request, Response } from "express"
import { emailService } from "../services"

class EmailController {

  private static instance: EmailController
  constructor() {

  }

  public static getInstance(): EmailController {
    if (!this.instance) {
      this.instance = new EmailController()
    }
    return this.instance
  }

  public async emailSender(req: Request, res: Response): Promise<any> {
    const response = await emailService.triggerEmailServcie(req.body.email)
    res.status(response.statusCode).json(response)
  }

}

export const emailController = EmailController.getInstance()
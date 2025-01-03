import { Request } from "express"
import { BadRequestException, NotFoundException } from "../errorHandler"
import { IHttpError } from "../types"
import { APIresponse } from "../types/apiResponse"
import nodemailer from 'nodemailer'
import { render } from "@react-email/components"
import { WelcomeEmail } from '../utils/emailTemplates/welcomeMail'
import React from "react"
import dotenv from 'dotenv'

class EmailService {
  private static instance: EmailService
  constructor() {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
  }

  public static getInstance(): EmailService {
    if (!this.instance) {
      this.instance = new EmailService()
    }
    return this.instance
  }


  public async triggerEmailServcie(email: string): Promise<APIresponse<any> | IHttpError> {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const welcomeTemplate = await render(<WelcomeEmail/>)

    const options = {
      from: "spellbee931@gmail.com",
      to: email,
      subject: "Welcome to Team REACT EMAIL",
      html: welcomeTemplate,
    };
    async function mailer() {
      await transporter.sendMail(options, (err, info) => {
        if (err) {
        console.log(err, "err from nodemailer");
        throw new BadRequestException('unable to send mail, try again')
      } else {
        console.log(info, "info nodemailer");
        return new APIresponse(false, 200, "Mail sent successfully !!!")
      }
    })
      }
    mailer()
    return new APIresponse(false, 200, "Mail sent successfully !!!")
  }
}

export const emailService = EmailService.getInstance()
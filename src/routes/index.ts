import { Application } from "express";
import { emailRouter } from "./emailRoute";

export default class MainRouter {
  constructor(app: Application) {
    app.get('/', (req, res) => {
      res.send(`<h1>Welcome to React Mailer Demo</h1>`)
    })
    app.use('/email', emailRouter.router)
  }
}
import express, { Application } from 'express'
import dotenv from "dotenv";
import MainRouter from './routes';

class Server {
  private static instance: Server
  private app: Application = express()
  private PORT: number = parseInt(process.env.PORT as string) || 8000

  constructor() {
    this.config()
    this.route()
    this.start()
  }

  public static getInstance(): Server {
    if (!this.instance) {
      this.instance = new Server()
    }
    return this.instance
  }

  // setter for port
  set portNumber(port: number) {
    this.PORT = port;
  }

  // getter for port number
  get Port(): number {
    return this.PORT;
  }

  private config(): void {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }));
  }

  private route(): void {
    new MainRouter(this.app)
  }

  private start() {
    this.app.listen(this.PORT, (): void => {
      console.log(`App is Listening on port ${this.PORT}`);
    });

  }

}

const nodeServer = Server.getInstance()

nodeServer.portNumber = process.env.PORT
  ? parseInt(process.env.PORT)
  : nodeServer.Port;
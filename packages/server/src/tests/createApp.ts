import dotenv from "dotenv"
import { Application } from "express"

import createServer, { ServerConfig } from "../createServer"

let app: Application
dotenv.config()

beforeAll(async () => {
  const config: ServerConfig = {
    port: process.env.PORT ?? 4000,
    apiKey: process.env.API_KEY ?? "",
    clientUrl: "http://localhost:5173",
  }

  app = await createServer(config)
})

export { app }

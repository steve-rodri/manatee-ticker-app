import dotenv from "dotenv"
import { Application } from "express"

import createServer, { ServerConfig } from "./createServer"

dotenv.config()

const config: ServerConfig = {
  port: process.env.PORT ?? 4000,
  apiKey: process.env.API_KEY ?? "",
  clientUrl: process.env.CLIENT_URL ?? "http://localhost:5173", // Change this to your client url
}

createServer(config).then((app: Application) => {
  app.listen(config.port, () => {
    console.info(`Server is running on: http://localhost:${config.port}/`)
  })
})

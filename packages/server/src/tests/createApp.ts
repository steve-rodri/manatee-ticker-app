import dotenv from "dotenv"
import { Application } from "express"

import createServer, { ServerConfig } from "../createServer"

let app: Application
dotenv.config()

beforeAll(async () => {
  // This will create an new instance of "MongoMemoryServer" and automatically start it
  //
  const config: ServerConfig = {
    port: process.env.PORT ?? 4000,
    apiKey: process.env.API_KEY ?? "",
    clientUrl: "http://localhost:5173", // Change this to your client url
  }

  app = await createServer(config)
})

export { app }

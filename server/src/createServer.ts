import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express, { Application } from "express"
import morgan from "morgan"

import { appRouter } from "./router"

export interface ServerConfig {
  port: string | number
  apiKey: string
  clientUrl: string
}

const createServer = async (config: ServerConfig): Promise<Application> => {
  const app = express()
  app.use(morgan("tiny"))
  app.use(cors({ origin: config.clientUrl }))
  app.use("/api", createExpressMiddleware({ router: appRouter(config) }))
  return app
}

export default createServer

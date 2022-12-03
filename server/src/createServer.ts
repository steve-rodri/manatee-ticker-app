import cors from "cors"
import express, { Application } from "express"

export interface ServerConfig {
  port: string | number
  apiKey: string
  clientUrl: string
}

const createServer = async (config: ServerConfig): Promise<Application> => {
  const app = express()
  app.use(cors({ origin: config.clientUrl }))
  console.log({ apiKey: config.apiKey })
  return app
}

export default createServer

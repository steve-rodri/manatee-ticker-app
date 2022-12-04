import { initTRPC } from "@trpc/server"
import axios from "axios"
import { z } from "zod"

import { ServerConfig } from "./createServer"

export const appRouter = (config: ServerConfig) => {
  const t = initTRPC.create()
  return t.router({
    quote: t.procedure
      .input(z.object({ symbol: z.string() }))
      .query(async req => {
        const { input } = req
        const { data: stockQuote } = await axios({
          method: "GET",
          url: `https://finnhub.io/api/v1/quote?symbol=${input.symbol}&token=${config.apiKey}`,
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "application/json",
          },
        })
        return stockQuote
      }),
  })
}

export type AppRouter = typeof appRouter

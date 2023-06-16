import { initTRPC } from "@trpc/server"
import axios from "axios"
import { z } from "zod"

import { ServerConfig } from "./createServer"

type StockQuote = {
  c: number
  h: number
  l: number
  o: number
  pc: number
  t: number
}

export const appRouter = (config: ServerConfig) => {
  const t = initTRPC.create()
  return t.router({
    quote: t.procedure
      .input(z.object({ symbol: z.string().regex(/[A-Z]+/) }))
      .query(async req => {
        const { data: stockQuote } = await axios({
          method: "GET",
          url: `https://finnhub.io/api/v1/quote?symbol=${req.input.symbol}&token=${config.apiKey}`,
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "application/json",
          },
        })
        return stockQuote as StockQuote
      }),
  })
}

export type AppRouter = ReturnType<typeof appRouter>

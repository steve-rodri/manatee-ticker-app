import { Text, Loader } from "@mantine/core"

import { trpc } from "../utils/trpc"

export const StockQuote = ({ ticker }: { ticker: string }) => {
  const { data, isLoading, isError, error } = trpc.quote.useQuery({
    symbol: ticker,
  })
  if (isLoading) return <Loader />
  if (isError) return <Text>{error.message}</Text>
  return <Text>${data?.c}</Text>
}

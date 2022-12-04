import { Title, Text, Loader, Stack } from "@mantine/core"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"

import { trpc } from "../utils/trpc"
dayjs.extend(localizedFormat)

export const StockQuote = ({ ticker }: { ticker: string }) => {
  const { data, isLoading, isError, error } = trpc.quote.useQuery({
    symbol: ticker,
  })
  const pctChange = (() => {
    if (data && data.c && data.pc) {
      const change = ((data.c - data.pc) / data.pc) * 100
      const rounded = parseFloat(change.toString()).toFixed(2)
      return rounded
    }
    return "0"
  })()
  if (isLoading) return <Loader />
  if (isError) return <Text>{error.message}</Text>
  return (
    <Stack align="center">
      <Title order={1}>{ticker}</Title>
      <Stack spacing={10} align="center">
        <Title order={3}>Current Price:</Title>
        <Text fz="lg" c="blue" data-testid="quote">
          ${data?.c}
        </Text>
      </Stack>
      <Stack spacing={10} align="center">
        <Title order={3}>Percent Change:</Title>
        <Text fz="lg" c={parseFloat(pctChange) > 0 ? "green" : "red"}>
          {`${pctChange}%`}
        </Text>
      </Stack>
      <Stack spacing={10} align="center">
        <Title order={3}>Time:</Title>
        <Text fz="lg">
          {data?.t ? dayjs(data.t * 1000).format("llll") : null}
        </Text>
      </Stack>
    </Stack>
  )
}

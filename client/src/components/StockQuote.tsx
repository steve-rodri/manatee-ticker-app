import { Title, Text, Loader, Stack } from "@mantine/core"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

import { trpc } from "../utils/trpc"
dayjs.extend(utc)

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
        <Text
          fz="lg"
          c={
            pctChange !== undefined && parseFloat(pctChange) > 0
              ? "green"
              : "red"
          }
        >
          {`${pctChange}%`}
        </Text>
      </Stack>
      <Stack spacing={10} align="center">
        <Title order={3}>Time:</Title>
        <Text fz="lg">
          {data?.t
            ? dayjs.utc(data.t * 1000).format("ddd MMM D YYYY, h:mma")
            : null}
        </Text>
      </Stack>
    </Stack>
  )
}

import { Center, Stack } from "@mantine/core"
import { useState } from "react"

import { StockQuote, TickerForm } from "./components"
import { useTickerForm } from "./hooks"

const App = () => {
  const [ticker, setTicker] = useState("AAPL")
  const tickerForm = useTickerForm(ticker)
  const onSubmit = tickerForm.onSubmit(values =>
    setTicker(values.ticker.toUpperCase())
  )
  return (
    <Center h="100vh" w="100vw">
      <Stack spacing="lg">
        <Center w="full">
          <StockQuote ticker={ticker} />
        </Center>
        <TickerForm form={tickerForm} onSubmit={onSubmit} />
      </Stack>
    </Center>
  )
}

export default App

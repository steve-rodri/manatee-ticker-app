import { TextInput, Button, Group, Center } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"

interface Values {
  ticker: string
}

interface TickerFormProps {
  form: UseFormReturnType<Values>
  onSubmit: () => void
}

export const TickerForm = ({ form, onSubmit }: TickerFormProps) => {
  const inputProps = form.getInputProps("ticker")
  return (
    <Center sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={onSubmit}>
        <TextInput label="Ticker" placeholder="AAPL" {...inputProps} />
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Center>
  )
}

export default TickerForm

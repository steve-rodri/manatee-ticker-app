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
      <form onSubmit={onSubmit} data-testid="form">
        <TextInput
          label="Ticker"
          placeholder="AAPL"
          size="lg"
          variant="filled"
          data-testid="input"
          labelProps={{ mb: "sm" }}
          tt="uppercase"
          wrapperProps={{ tt: "uppercase" }}
          {...inputProps}
        />
        <Group position="center" mt="md">
          <Button type="submit" size="lg">
            Get Quote
          </Button>
        </Group>
      </form>
    </Center>
  )
}

export default TickerForm

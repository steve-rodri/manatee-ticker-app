import { useForm, zodResolver, UseFormReturnType } from "@mantine/form"
import { z } from "zod"

interface Values {
  ticker: string
}

type UseTickerForm = (initialValue: string) => UseFormReturnType<Values>

export const useTickerForm: UseTickerForm = ticker => {
  return useForm({
    initialValues: {
      ticker,
    },
    validate: zodResolver(
      z.object({
        ticker: z
          .string()
          .min(2)
          .regex(/[a-zA-Z]/),
      })
    ),
  })
}

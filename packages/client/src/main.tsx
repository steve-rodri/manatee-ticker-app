import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { trpc } from "./utils/trpc"

const Root = () => {
  const [queryClient] = React.useState(() => new QueryClient())
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_SERVER_URL ?? "http://localhost:4000/api",
        }),
      ],
    })
  )
  return (
    <React.StrictMode>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </trpc.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
)

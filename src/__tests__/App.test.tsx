import App from "../App";
import { render } from "@testing-library/react"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { expect, describe, it } from 'vitest'

describe("App test", () => {
  it("Sould match snapshot",() => {

    const queryClient = new QueryClient()

    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
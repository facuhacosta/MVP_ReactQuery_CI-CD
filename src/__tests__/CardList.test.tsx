import CardList from "../components/CardsList/CardList"
import { render } from "@testing-library/react"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { expect, describe, it, vi, afterEach } from "vitest"


describe("App test", () => {

  const mocks = vi.hoisted(() => ({
    characters: [
      {
        "name": "3-D Man",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          "extension": "jpg"
        },
        "comics": {
          "items": [
            {
              "name": "Avengers: The Initiative (2007) #14"
            },
            {
              "name": "Avengers: The Initiative (2007) #15"
            },
            {
              "name": "Marvel Premiere (1972) #35"
            }
          ]
        }
      }
    ]
  }))

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("Sould Render Character", async () => {

    vi.mock('@tanstack/react-query', async () => {
      const actual: {} = await vi.importActual('@tanstack/react-query')
      return {
        ...actual,
        useQuery: vi.fn().mockReturnValueOnce({ data: mocks.characters, isLoading: false, error: {} }),
      }
    })

    const queryClient = new QueryClient()

    const { asFragment, findByText } = render(
      <QueryClientProvider client={queryClient}>
        <CardList />
      </QueryClientProvider>
    )
    await findByText('3-D Man')
    expect(asFragment()).toMatchSnapshot()
  })

  it("Sould show loading", async () => {

    vi.mock('@tanstack/react-query', async () => {
      const actual: {} = await vi.importActual('@tanstack/react-query')
      return {
        ...actual,
        useQuery: vi.fn().mockReturnValue({ data: mocks.characters, isLoading: true, error: {} }),
      }
    })

    const queryClient = new QueryClient()

    const { asFragment, findAllByText } = render(
      <QueryClientProvider client={queryClient}>
        <CardList />
      </QueryClientProvider>
    )
    await findAllByText('Is Loading ...')
    expect(asFragment()).toMatchSnapshot()
  })
})
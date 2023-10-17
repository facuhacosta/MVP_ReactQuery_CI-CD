import App from "../App";
import { render } from "@testing-library/react"
import { expect, describe, it } from 'vitest'

describe("App test", () => {
  it("Sould match snapshot",() => {
    const { asFragment } = render(<App/>)

    expect(asFragment()).toMatchSnapshot()
  })
})
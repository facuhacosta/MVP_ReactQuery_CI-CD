import Card from "../components/Card/Card"
import { render } from "@testing-library/react"
import { expect, describe, it } from 'vitest'
import characters from "./__mocks__/characters.json";

describe("App test", () => {
  it("Sould match snapshot", () => {

    const { asFragment } = render(<Card character={characters[0]} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
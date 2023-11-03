export type Character = {
  name: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    items: {
      name: string
    }[]
  }
}
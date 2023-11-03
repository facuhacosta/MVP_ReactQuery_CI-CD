import md5 from 'md5'

export const fetchUsers = async () => {
  return await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${Date.now()}&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${md5(Date.now() + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY)}`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => {
      const comics: Character[] = res.data.results
      return comics
    })
}
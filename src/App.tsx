import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import md5 from 'md5'
import { useQuery } from '@tanstack/react-query'


const fetchUsers = async () => {
  return await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${Date.now()}&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${md5(Date.now() + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY)}`)
    .then(async res => {
      if (!res.ok) throw new Error("Error del fetch");
      return await res.json()
    })
    .then(res => res.data.results)
}

function App() {
  const {isLoading, isError, data} = useQuery({
    queryKey: ['comics'],
    queryFn: async () => {
      await fetchUsers()
    }
  }
  )

  console.log(data);
  
  const [count, setCount] = useState(0)
  // const [comics, setComics] = useState(Array<any>)

  // useEffect(() => {
  //   console.log(comics);
  // }, [comics])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {isLoading && "Loading ..."}
        {isError && "Error en la Carga"}
      </div>
    </>
  )
}

export default App

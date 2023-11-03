import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../../assets/utils"
import Card from "../Card/Card"
import styles from "./CardList.module.scss"

const CardList = () => {
  const { isLoading, isError, data: characters = [] } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => await fetchUsers()
  })

  return (
    <div className={styles.container}>
      {characters.length > 0 && characters.map((character: Character) => (
        <Card character={character} />
      ))}

      {isLoading && <p>Is Loading ...</p>}
      {isError && <p>Error en la Carga</p>}
      {!isError && !isLoading && characters.length === 0 && <p>No hay Usuarios</p>}
    </div>
  )
}

export default CardList
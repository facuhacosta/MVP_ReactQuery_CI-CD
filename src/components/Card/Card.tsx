import styles from "./Card.module.scss"

const Card = ({character}:{character: Character}) => {  
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
      </div>
      <section>
        <h3>{character.name}</h3>
      </section>
      <ol>
        {
          character.comics.items.slice(0,3).map(({name}) => (
            <li>{name}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default Card
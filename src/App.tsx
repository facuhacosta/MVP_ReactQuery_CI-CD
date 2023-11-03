import CardList from './components/CardsList/CardList'
import './App.css'

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%'}}>
      <h1>Personajes de Marvel</h1>
      <CardList />
    </div>
  )
}

export default App

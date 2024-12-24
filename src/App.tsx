import { GameBoard } from './components/GameBoard'
import './App.css'

function App() {
  // For testing purposes, we'll hardcode a word
  // Later this will come from a word list
  const word = "REFACTOR" 

  return (
    <div className="app">
      <h1>Assembly: Endgame</h1>
      <p className="subtitle">
        Guess the word in under 8 attempts to keep the
        programming world safe from Assembly!
      </p>
      <GameBoard word={word} />
    </div>
  )
}

export default App

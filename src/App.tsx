import { GameBoard } from './components/GameBoard'
import './App.css'

export function App() {
  // For testing purposes - later this will be randomly selected
  const testWord = "react";

  return (
    <div className="app">
      <h1>Assembly Endgame</h1>
      <p className="subtitle">
        Guess the word before all programming languages disappear! 
        Each wrong guess removes a language, with Assembly being your last hope.
      </p>
      <GameBoard word={testWord} />
    </div>
  )
}

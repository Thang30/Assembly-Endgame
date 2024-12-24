import { useState } from 'react';
import { GameBoard } from './components/GameBoard'
import './App.css'

// For testing purposes - later this will be from a word list
const TEST_WORDS = ['react', 'javascript', 'typescript', 'programming'];

export function App() {
  const [word, setWord] = useState(() => 
    TEST_WORDS[Math.floor(Math.random() * TEST_WORDS.length)]
  );

  function handleReset() {
    setWord(TEST_WORDS[Math.floor(Math.random() * TEST_WORDS.length)]);
  }

  return (
    <div className="app">
      <h1>Assembly Endgame</h1>
      <p className="subtitle">
        Guess the word before all programming languages disappear! 
        Each wrong guess removes a language, with Assembly being your last hope.
      </p>
      <GameBoard word={word} onReset={handleReset} />
    </div>
  );
}

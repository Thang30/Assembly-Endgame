import { useState } from 'react';
import { Keyboard } from './Keyboard';

interface GameBoardProps {
  word: string;
}

export function GameBoard({ word }: GameBoardProps) {
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  function getDisplayWord() {
    return word
      .split('')
      .map(letter => (guessedLetters.has(letter.toLowerCase()) ? letter : '_'))
      .join(' ');
  }

  function handleLetterGuess(letter: string) {
    setGuessedLetters(prev => new Set([...prev, letter]));
  }

  return (
    <div className="game-board">
      <div className="word-display">
        <h2>{getDisplayWord()}</h2>
      </div>
      <Keyboard 
        onLetterGuess={handleLetterGuess}
        guessedLetters={guessedLetters}
      />
    </div>
  );
}

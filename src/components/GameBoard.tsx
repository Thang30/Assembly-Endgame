import { useState } from 'react';
import { Keyboard } from './Keyboard';
import { LanguageList } from './LanguageList';

const PROGRAMMING_LANGUAGES = [
  'HTML', 'CSS', 'JavaScript', 'React', 
  'TypeScript', 'Node.js', 'Python', 'Ruby', 'Assembly'
];

interface GameBoardProps {
  word: string;
}

export function GameBoard({ word }: GameBoardProps) {
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  function handleLetterGuess(letter: string) {
    if (guessedLetters.has(letter)) return;
    
    setGuessedLetters(prev => new Set([...prev, letter]));
    
    if (!word.toLowerCase().includes(letter)) {
      setIncorrectGuesses(prev => prev + 1);
    }
  }

  function getDisplayWord() {
    return word
      .split('')
      .map(letter => (guessedLetters.has(letter.toLowerCase()) ? letter : '_'))
      .join(' ');
  }

  return (
    <div className="game-board">
      <LanguageList 
        languages={PROGRAMMING_LANGUAGES}
        removedCount={incorrectGuesses}
      />
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

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
  const [correctLetters, setCorrectLetters] = useState<Set<string>>(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  function checkWinCondition(letters: Set<string>): boolean {
    return word.toLowerCase().split('').every(letter => letters.has(letter));
  }

  function handleLetterGuess(letter: string) {
    if (guessedLetters.has(letter) || gameStatus !== 'playing') return;
    
    const newGuessedLetters = new Set([...guessedLetters, letter]);
    setGuessedLetters(newGuessedLetters);
    
    if (word.toLowerCase().includes(letter)) {
      const newCorrectLetters = new Set([...correctLetters, letter]);
      setCorrectLetters(newCorrectLetters);
      
      if (checkWinCondition(newCorrectLetters)) {
        setGameStatus('won');
      }
    } else {
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);
      
      if (newIncorrectGuesses >= PROGRAMMING_LANGUAGES.length) {
        setGameStatus('lost');
      }
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
        correctLetters={correctLetters}
      />
    </div>
  );
}

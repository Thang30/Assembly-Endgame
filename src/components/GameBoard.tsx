import { useState } from 'react';
import { Keyboard } from './Keyboard';
import { LanguageList } from './LanguageList';
import { StatusMessage } from './StatusMessage';
import { playSound } from '../constants/sounds';

const PROGRAMMING_LANGUAGES = [
  'HTML', 'CSS', 'JavaScript', 'React', 
  'TypeScript', 'Node.js', 'Python', 'Ruby', 'Assembly'
];

interface GameBoardProps {
  word: string;
  onReset: () => void;
}

export function GameBoard({ word, onReset }: GameBoardProps) {
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [correctLetters, setCorrectLetters] = useState<Set<string>>(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  function resetGame() {
    setGuessedLetters(new Set());
    setCorrectLetters(new Set());
    setIncorrectGuesses(0);
    setGameStatus('playing');
    onReset();
  }

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
      playSound('correct');
      
      if (checkWinCondition(newCorrectLetters)) {
        setGameStatus('won');
        playSound('win');
      }
    } else {
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);
      playSound('incorrect');
      
      if (newIncorrectGuesses >= PROGRAMMING_LANGUAGES.length) {
        setGameStatus('lost');
        playSound('lose');
      }
    }
  }

  function getDisplayWord() {
    return word.split('').map((letter, index) => (
      <div key={index} className="letter-slot">
        <span className="letter">
          {guessedLetters.has(letter.toLowerCase()) ? letter : ''}
        </span>
        <div className="letter-line"></div>
      </div>
    ));
  }

  return (
    <div className="game-board">
      <LanguageList 
        languages={PROGRAMMING_LANGUAGES}
        removedCount={incorrectGuesses}
      />
      <div className="word-display">
        <div className="word-container">
          {getDisplayWord()}
        </div>
      </div>
      <StatusMessage 
        gameStatus={gameStatus}
        word={word}
        incorrectGuesses={incorrectGuesses}
        languages={PROGRAMMING_LANGUAGES}
      />
      <Keyboard 
        onLetterGuess={handleLetterGuess}
        guessedLetters={guessedLetters}
        correctLetters={correctLetters}
      />
      {gameStatus !== 'playing' && (
        <button onClick={resetGame} className="reset-button">
          New Game
        </button>
      )}
    </div>
  );
}

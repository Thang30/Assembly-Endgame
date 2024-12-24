interface KeyboardProps {
  onLetterGuess: (letter: string) => void;
  guessedLetters: Set<string>;
}

export function Keyboard({ onLetterGuess, guessedLetters }: KeyboardProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="keyboard">
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => onLetterGuess(letter.toLowerCase())}
          disabled={guessedLetters.has(letter.toLowerCase())}
        >
          {letter}
        </button>
      ))}
    </div>
  );
} 
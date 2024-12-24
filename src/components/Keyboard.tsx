interface KeyboardProps {
  onLetterGuess: (letter: string) => void;
  guessedLetters: Set<string>;
  correctLetters: Set<string>;
}

export function Keyboard({ onLetterGuess, guessedLetters, correctLetters }: KeyboardProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  function getButtonClass(letter: string) {
    const lowerLetter = letter.toLowerCase();
    if (!guessedLetters.has(lowerLetter)) return 'unused';
    return correctLetters.has(lowerLetter) ? 'correct' : 'incorrect';
  }

  return (
    <div className="keyboard">
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => onLetterGuess(letter.toLowerCase())}
          disabled={guessedLetters.has(letter.toLowerCase())}
          className={getButtonClass(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
} 
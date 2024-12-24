interface KeyboardProps {
  onLetterGuess: (letter: string) => void;
  guessedLetters: Set<string>;
  correctLetters: Set<string>;
}

export function Keyboard({ onLetterGuess, guessedLetters, correctLetters }: KeyboardProps) {
  const rows = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  function getButtonClass(letter: string) {
    const lowerLetter = letter.toLowerCase();
    if (!guessedLetters.has(lowerLetter)) return 'unused';
    return correctLetters.has(lowerLetter) ? 'correct' : 'incorrect';
  }

  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map(letter => (
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
      ))}
    </div>
  );
} 
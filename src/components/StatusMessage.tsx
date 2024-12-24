interface StatusMessageProps {
  gameStatus: 'playing' | 'won' | 'lost';
  word: string;
  incorrectGuesses: number;
  languages: string[];
}

export function StatusMessage({ gameStatus, incorrectGuesses, languages }: StatusMessageProps) {
  if (gameStatus === 'playing' && incorrectGuesses === 0) return null;

  return (
    <div className={`status-message ${gameStatus}`}>
      {gameStatus === 'playing' ? (
        <p>Farewell {languages[incorrectGuesses - 1]}</p>
      ) : gameStatus === 'won' ? (
        <>
          <p>You win!</p>
          <p>Well done! 🎉</p>
        </>
      ) : (
        <>
          <p>Game over!</p>
          <p>You lose! Better start learning assembly 😂</p>
        </>
      )}
    </div>
  );
} 
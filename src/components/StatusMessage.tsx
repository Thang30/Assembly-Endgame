interface StatusMessageProps {
  gameStatus: 'playing' | 'won' | 'lost';
  word: string;
}

export function StatusMessage({ gameStatus, word }: StatusMessageProps) {
  if (gameStatus === 'playing') return null;

  return (
    <div className={`status-message ${gameStatus}`}>
      {gameStatus === 'won' ? (
        <p>Congratulations! You saved the programming world!</p>
      ) : (
        <p>Game Over! The word was: <span className="revealed-word">{word}</span></p>
      )}
    </div>
  );
} 
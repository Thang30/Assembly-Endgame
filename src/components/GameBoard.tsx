interface GameBoardProps {
  word: string;
}

export function GameBoard({ word }: GameBoardProps) {
  return (
    <div className="word-container">
      {word.split('').map((_, index) => (
        <div key={index} className="letter-slot">
          <div className="letter-line"></div>
        </div>
      ))}
    </div>
  );
}

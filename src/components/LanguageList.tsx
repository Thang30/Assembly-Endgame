interface LanguageListProps {
  languages: string[];
  removedCount: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  'HTML': '#E34F26',      // Orange
  'CSS': '#1572B6',       // Blue
  'JavaScript': '#F7DF1E', // Yellow
  'React': '#61DAFB',     // Light blue
  'TypeScript': '#3178C6', // Blue
  'Node.js': '#339933',   // Green
  'Python': '#3776AB',    // Blue
  'Ruby': '#CC342D',      // Red
  'Assembly': '#6E4C13'   // Brown
};

export function LanguageList({ languages, removedCount }: LanguageListProps) {
  return (
    <div className="language-list">
      {languages.map((language, index) => (
        <div 
          key={language}
          className={`language-item ${index < removedCount ? 'removed' : ''}`}
          style={{ 
            backgroundColor: LANGUAGE_COLORS[language],
            color: ['JavaScript'].includes(language) ? '#000' : '#fff'
          }}
        >
          {index < removedCount ? '💀' : language}
        </div>
      ))}
    </div>
  );
} 
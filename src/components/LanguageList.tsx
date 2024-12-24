interface LanguageListProps {
  languages: string[];
  removedCount: number;
}

export function LanguageList({ languages, removedCount }: LanguageListProps) {
  return (
    <div className="language-list">
      {languages.map((language, index) => (
        <div 
          key={language}
          className={`language-item ${index < removedCount ? 'removed' : ''}`}
        >
          {index < removedCount ? '💀' : language}
        </div>
      ))}
    </div>
  );
} 
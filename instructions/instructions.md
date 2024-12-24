# Assembly-Endgame - Product Requirements Document (PRD)

## Table of Contents
- Project Overview
- Objectives
- Core Functionalities
- Technical Stack
- File Structure
- Component Breakdown
- Implementation Details

---

## Project Overview
Assembly-Endgame is a word-guessing game built with React, inspired by Hangman. Players must guess an English word within 8 attempts. Instead of drawing a hangman, each wrong guess removes a programming language from a list, with Assembly being the last one. The game aims to create an engaging way to test the English vocabulary while adding a humorous twist to the classic Hangman game.

---

## Objectives
- Create an intuitive word-guessing interface
- Implement engaging visual feedback for correct/incorrect guesses
- Manage game state effectively
- Provide clear win/lose conditions
- Ensure responsive design and smooth animations
- Maintain a clean, maintainable codebase

---

## Core Functionalities

1. Word Display
   1.1. Show empty letter slots for the mystery word
   1.2. Reveal correct letters as they are guessed
   1.3. Maintain letter spacing and alignment

2. Programming Languages List
   2.1. Display a list of programming languages (HTML, CSS, JavaScript, React, TypeScript, Node.js, Python, Ruby, Assembly)
   2.2. Remove languages one by one for incorrect guesses
   2.3. Visual indication (skull icon) for removed languages

3. Letter Input
   3.1. Display an on-screen keyboard (A-Z)
   3.2. Color-code keys based on guess status:
        3.2.1. Green: Correct guess
        3.2.2. Red: Incorrect guess
        3.2.3. Yellow/Default: Unused

4. Game State Management
   4.1. Track remaining attempts (programming languages)
   4.2. Monitor correct/incorrect guesses
   4.3. Validate win/lose conditions
   4.4. Support game reset functionality

5. User Feedback
   5.1. Display game status messages
   5.2. Show win/lose screens with appropriate messages
   5.3. "New Game" button for reset

6. Optional Features
   6.1. Word categories or difficulty levels
   6.2. Score tracking
   6.3. Animation for language removal
   6.4. Sound effects

---

## Technical Stack
- React: Core UI library
- TypeScript: Type safety and better development experience
- CSS Modules: Scoped styling
- Vite: Build tool and development server

---

## File Structure
```plaintext
assembly-endgame/
├── README.md
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── GameBoard.tsx
│   │   ├── Keyboard.tsx
│   │   ├── LanguageList.tsx
│   │   └── StatusMessage.tsx
│   ├── styles/
│   │   └── modules/
│   ├── constants/
│   │   └── wordList.ts
│   └── types/
│       └── index.ts
└── tsconfig.json
```

---

## Component Breakdown

### GameBoard Component
Manages the main game logic and state:
```typescript
interface GameState {
  word: string;
  guessedLetters: Set<string>;
  remainingLanguages: string[];
  gameStatus: 'playing' | 'won' | 'lost';
}
```

### LanguageList Component
Displays and manages the programming languages list:
```typescript
interface LanguageListProps {
  languages: string[];
  removedCount: number;
}
```

### Keyboard Component
Handles letter input and visual feedback:
```typescript
interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  guessedLetters: Set<string>;
  correctLetters: Set<string>;
}
```

---

## Implementation Details

### Game Logic
1. Word Selection
   - Randomly select word from predefined list
   - Initialize empty guess array

2. Guess Processing
   - Validate letter hasn't been guessed
   - Update guessed letters set
   - Remove language if guess is incorrect
   - Check win/lose conditions

3. Win/Lose Conditions
   - Win: All letters in word guessed
   - Lose: All programming languages removed

### State Management
- Track current word
- Maintain set of guessed letters
- Monitor remaining languages
- Control game status

### Styling Guidelines
- Dark theme with high contrast
- Consistent spacing and typography
- Clear visual feedback for interactions
- Responsive layout for all screen sizes

---

## Additional Considerations
- Accessibility features
- Mobile-friendly design
- Performance optimization
- Error handling
- Testing strategy 
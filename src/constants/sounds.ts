// Sound file URLs - using MP3 files for smaller size
export const SOUNDS = {
  correct: '/sounds/correct.mp3',
  incorrect: '/sounds/incorrect.mp3',
  win: '/sounds/win.mp3',
  lose: '/sounds/lose.mp3',
} as const;

// Utility function to play sounds
export function playSound(soundName: keyof typeof SOUNDS) {
  const audio = new Audio(SOUNDS[soundName]);
  audio.play().catch(() => {
    // Silently fail if sound can't be played
  });
} 
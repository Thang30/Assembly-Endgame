// Sound file URLs - using .wav files from public/sounds/
export const SOUNDS = {
  correct: '/sounds/correct.wav',
  incorrect: '/sounds/incorrect.wav',
  win: '/sounds/win.wav',
  lose: '/sounds/lose.wav',
} as const;

// Utility function to play sounds
export function playSound(soundName: keyof typeof SOUNDS) {
  const audio = new Audio(SOUNDS[soundName]);
  audio.play().catch(() => {
    // Silently fail if sound can't be played
    // This happens if user hasn't interacted with page yet
  });
} 
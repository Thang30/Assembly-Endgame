// Sound file URLs - using MP3 files for smaller size
const BASE_PATH = import.meta.env.DEV ? '' : '/Assembly-Endgame';

export const SOUNDS = {
  correct: `${BASE_PATH}/sounds/correct.mp3`,
  incorrect: `${BASE_PATH}/sounds/incorrect.mp3`,
  win: `${BASE_PATH}/sounds/win.mp3`,
  lose: `${BASE_PATH}/sounds/lose.mp3`,
} as const;

// Utility function to play sounds
export function playSound(soundName: keyof typeof SOUNDS) {
  const audio = new Audio(SOUNDS[soundName]);
  audio.play().catch(() => {
    // Silently fail if sound can't be played
  });
} 
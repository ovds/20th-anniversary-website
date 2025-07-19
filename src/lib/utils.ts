import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(array: T[], seed?: string): T[] {
  console.log('Shuffling array with', array.length, 'items');
  const shuffled = [...array]
  // Temporarily disable seeded random for testing
  const random = Math.random // seed ? seededRandom(seed) : Math.random
  console.log('Using Math.random for testing');
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomValue = random()
    const j = Math.floor(randomValue * (i + 1))
    
    console.log(`Step ${shuffled.length - 1 - i}: i=${i}, random=${randomValue}, j=${j}`);
    
    // Bounds checking
    if (j < 0 || j >= shuffled.length || i < 0 || i >= shuffled.length) {
      console.error('Invalid indices:', { i, j, arrayLength: shuffled.length });
      continue; // Skip this swap
    }
    
    // Validate objects before swap
    console.log('Before swap:', {
      i_title: (shuffled[i] as any)?.title || 'INVALID',
      j_title: (shuffled[j] as any)?.title || 'INVALID'
    });
    
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
    
    // Validate objects after swap
    console.log('After swap:', {
      i_title: (shuffled[i] as any)?.title || 'INVALID',
      j_title: (shuffled[j] as any)?.title || 'INVALID'
    });
  }
  
  console.log('Final shuffled array:', shuffled.map(item => (item as any)?.title || 'INVALID'));
  return shuffled
}

function seededRandom(seed: string): () => number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & 0xffffffff // Ensure 32-bit integer
  }
  
  console.log('Initial hash:', hash);
  
  return function() {
    hash = (hash * 9301 + 49297) % 233280
    const result = hash / 233280
    console.log('Random value:', result, 'Hash:', hash);
    
    // Ensure result is valid
    if (isNaN(result) || result < 0 || result >= 1) {
      console.warn('Invalid random value:', result);
      return Math.random(); // Fallback
    }
    
    return result
  }
}

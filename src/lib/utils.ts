import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(array: T[]): T[] {
  console.log('Shuffling array with', array.length, 'items');
  const shuffled = [...array]
  const random = Math.random
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
      i_title: (shuffled[i] as { title?: string })?.title || 'INVALID',
      j_title: (shuffled[j] as { title?: string })?.title || 'INVALID'
    });
    
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
    
    // Validate objects after swap
    console.log('After swap:', {
      i_title: (shuffled[i] as { title?: string })?.title || 'INVALID',
      j_title: (shuffled[j] as { title?: string })?.title || 'INVALID'
    });
  }
  
  console.log('Final shuffled array:', shuffled.map(item => (item as { title?: string })?.title || 'INVALID'));
  return shuffled
}


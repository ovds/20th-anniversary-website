'use client';

import { useState, useEffect } from 'react';

const backgroundImages = [
  '/showcase/Games Day Exhibition Match/Evan_GamesDay-48.jpg',
  '/showcase/Mascot Launch/Mascot actual (1).jpeg',
  '/showcase/Nanosatellite/WhatsApp Image 2025-07-14 at 3.26.23 AM.jpeg',
  '/showcase/Research Congress/Research Congress Key Note Speaker.jpg',
  '/showcase/Speech Day/KLV_3537.JPG'
];

export function useScrollBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Slow down image transitions to 60% of scroll speed
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 0.6;
      
      const imageIndex = Math.min(
        Math.floor(scrollPercentage * backgroundImages.length),
        backgroundImages.length - 1
      );
      
      setCurrentImageIndex(imageIndex);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    currentImage: backgroundImages[currentImageIndex],
    imageIndex: currentImageIndex
  };
}
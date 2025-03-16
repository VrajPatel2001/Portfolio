'use client';

import { useEffect } from 'react';
import { particlesConfig } from '../particles-config';

const ParticlesBackground = () => {
  useEffect(() => {
    const initParticles = async () => {
      try {
        // Wait for particles.js to be loaded
        await new Promise((resolve) => {
          const checkParticles = () => {
            if ((window as any).particlesJS) {
              resolve(true);
            } else {
              setTimeout(checkParticles, 100);
            }
          };
          checkParticles();
        });

        // Initialize particles
        (window as any).particlesJS('particles-js', particlesConfig);
      } catch (error) {
        console.error('Error initializing particles.js:', error);
      }
    };

    initParticles();
  }, []);

  return (
    <div 
      id="particles-js" 
      className="fixed inset-0 z-0"
      suppressHydrationWarning
    />
  );
};

export default ParticlesBackground;

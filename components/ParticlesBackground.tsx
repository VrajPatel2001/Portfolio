'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext';

// Add type definition for the Particles library
declare global {
  interface Window {
    particlesJS: any;
    Particles: any;
  }
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const particlesInstance = useRef<any>(null);

  // Initial setup of particles
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Particles) return;
    
    // Only set up once on initial load
    const setupParticles = () => {
      if (!canvasRef.current) return;
      
      try {
        // If we already have an instance, clean it up
        if (particlesInstance.current) {
          try {
            particlesInstance.current.destroy();
          } catch (e) {
            console.log('Error destroying particles:', e);
          }
        }
        
        // Ensure the canvas element exists
        const canvasElement = document.querySelector('#particles-canvas');
        if (!canvasElement) return;
        
        // Create new instance with current theme
        particlesInstance.current = window.Particles.init({
          selector: '#particles-canvas',
          color: isDark ? '#ffffff' : '#000000', 
          maxParticles: 100,
          connectParticles: true,
          speed: 0.5,
          minDistance: 120,
          sizeVariations: 3,
          responsive: [
            {
              breakpoint: 768,
              options: {
                maxParticles: 80,
                connectParticles: true,
                minDistance: 80
              }
            }
          ]
        });
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    };

    // Wait for the DOM to be fully ready
    if (document.readyState === 'complete') {
      setupParticles();
    } else {
      window.addEventListener('load', setupParticles);
      return () => window.removeEventListener('load', setupParticles);
    }
  }, [isDark]);

  // Recreate the canvas when theme changes to avoid context issues
  useEffect(() => {
    if (isInitialized && canvasRef.current) {
      // We'll add a small delay to ensure the DOM has updated
      const timer = setTimeout(() => {
        // Remove the old canvas and create a new one
        const oldCanvas = document.getElementById('particles-canvas');
        if (oldCanvas && oldCanvas.parentNode) {
          const parent = oldCanvas.parentNode;
          
          // Create new canvas
          const newCanvas = document.createElement('canvas');
          newCanvas.id = 'particles-canvas';
          newCanvas.className = 'fixed inset-0 -z-20';
          
          // Replace old canvas with new one
          parent.replaceChild(newCanvas, oldCanvas);
          
          // Update ref
          canvasRef.current = newCanvas;
          
          // Reinitialize particles
          if (window.Particles) {
            try {
              particlesInstance.current = window.Particles.init({
                selector: '#particles-canvas',
                color: isDark ? '#ffffff' : '#000000', 
                maxParticles: 100,
                connectParticles: true,
                speed: 0.5,
                minDistance: 120,
                sizeVariations: 3,
                responsive: [
                  {
                    breakpoint: 768,
                    options: {
                      maxParticles: 80,
                      connectParticles: true,
                      minDistance: 80
                    }
                  }
                ]
              });
            } catch (error) {
              console.error('Error reinitializing particles:', error);
            }
          }
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [theme, isInitialized]);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="fixed inset-0 -z-20"
    />
  )
}

export default ParticlesBackground

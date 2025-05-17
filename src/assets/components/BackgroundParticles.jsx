import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const BackgroundParticles = () => {
  const particleContainerRef = useRef(null);
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const particleContainer = particleContainerRef.current;
    if (!particleContainer) return;
    
    // Clear existing particles
    particleContainer.innerHTML = '';
    
    // Add blur overlay for depth
    const blurOverlay = document.createElement('div');
    blurOverlay.classList.add('blur-overlay');
    particleContainer.appendChild(blurOverlay);
    
    // Generate random particles - responsive count based on screen size
    const particleCount = window.innerWidth > 1400 ? 100 : 
                         window.innerWidth > 1200 ? 85 : 
                         window.innerWidth > 768 ? 70 : 50;
    
    // More diverse animation types
    const animationTypes = [
      // Upward float
      (duration, delay) => `float ${duration}s ease-in infinite ${delay}s`,
      
      // Diagonal movement
      (duration, delay) => {
        const direction = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
        return `floatDiagonal ${duration}s ease-in-out infinite ${direction} ${delay}s`;
      },
      
      // Pulse effect
      (duration, delay) => `pulse ${Math.max(duration / 2, 5)}s ease-in-out infinite ${delay}s`,
      
      // Slow drift
      (duration, delay) => `drift ${duration * 1.5}s ease-in-out infinite alternate ${delay}s`,
      
      // Circular motion
      (duration, delay) => `circular ${duration * 2}s linear infinite ${delay}s`,
      
      // Spiral effect
      (duration, delay) => `spiral ${duration * 2.5}s ease-in-out infinite ${delay}s`,
      
      // New: Gentle wave motion
      (duration, delay) => `wave ${duration * 1.8}s ease-in-out infinite ${delay}s`,
      
      // New: Shimmer effect
      (duration, delay) => `shimmer ${duration}s linear infinite ${delay}s`
    ];
    
    // Create particle layers for depth effect
    const layers = [0.3, 0.5, 0.7, 1]; // z-index layers for depth effect
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomly assign a layer for depth effect
      const layerIndex = Math.floor(Math.random() * layers.length);
      const layer = layers[layerIndex];
      
      // Random properties - size varies by layer
      const size = (Math.random() * 12 + 2) * (layer * 1.2); // larger particles appear closer
      const posX = Math.random() * 100; // 0-100%
      const posY = Math.random() * 100; // 0-100%
      const duration = Math.random() * 20 + 25; // 25-45s
      const delay = Math.random() * 12; // 0-12s
      
      // Select random animation type with slight preference for certain animations
      const weightedTypes = [...animationTypes];
      if (layer > 0.7) {
        // Closer particles move more distinctly
        weightedTypes.push(animationTypes[2], animationTypes[4], animationTypes[6]); // extra weights for pulse, circular and wave
      } else {
        // Further particles drift more
        weightedTypes.push(animationTypes[3], animationTypes[7]); // extra weights for drift and shimmer
      }
      
      const animationIndex = Math.floor(Math.random() * weightedTypes.length);
      const animation = weightedTypes[animationIndex](duration, delay);
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.bottom = `${posY}%`;
      particle.style.opacity = `${Math.random() * 0.3 * layer + 0.1}`; // Layer affects opacity
      particle.style.animation = animation;
      particle.style.zIndex = "-1"; // Force particles to stay behind everything
      
      // Add a subtle blur to certain particles
      if (Math.random() > 0.7) {
        particle.style.filter = `blur(${Math.random() * 2}px)`;
      }
      
      particleContainer.appendChild(particle);
    }
    
    // Add custom animations to the stylesheet
    if (!document.getElementById('particle-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'particle-animations';
      styleSheet.innerHTML = `
        @keyframes floatDiagonal {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}130px, -130px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.8); opacity: 0.6; }
        }
        
        @keyframes drift {
          0% { transform: translate(0, 0); }
          33% { transform: translate(${Math.random() > 0.5 ? '' : '-'}70px, ${Math.random() > 0.5 ? '' : '-'}40px); }
          66% { transform: translate(${Math.random() > 0.5 ? '-' : ''}50px, ${Math.random() > 0.5 ? '-' : ''}80px); }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}40px, ${Math.random() > 0.5 ? '' : '-'}60px); }
        }
        
        @keyframes circular {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        @keyframes spiral {
          0% { transform: rotate(0deg) translateX(10px) rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) translateX(60px) rotate(-180deg) scale(0.8); }
          100% { transform: rotate(360deg) translateX(10px) rotate(-360deg) scale(1); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateX(15px) translateY(-15px); }
          50% { transform: translateX(30px) translateY(0); }
          75% { transform: translateX(15px) translateY(15px); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0.1; filter: saturate(100%); }
          50% { opacity: 0.3; filter: saturate(150%); }
          100% { opacity: 0.1; filter: saturate(100%); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    // Cleanup function
    return () => {
      if (particleContainer) {
        particleContainer.innerHTML = '';
      }
      const styleSheet = document.getElementById('particle-animations');
      if (styleSheet) {
        styleSheet.remove();
      }
    };
  }, [isDarkMode]);
  
  return (
    <div 
      ref={particleContainerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    />
  );
};

export default BackgroundParticles; 
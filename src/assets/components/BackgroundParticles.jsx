import React, { useEffect, useRef, useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';

const BackgroundParticles = () => {
  const particleContainerRef = useRef(null);
  const { isDarkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  
  // Check device capabilities on mount
  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    // Attempt to detect low performance devices
    const checkPerformance = () => {
      // Basic heuristic - might be improved
      const lowPerf = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
        window.innerWidth < 768;
      setIsLowPerfDevice(lowPerf);
    };
    
    checkMobile();
    checkPerformance();
    
    // Only add resize listener for non-mobile - mobile shouldn't change much
    if (!isMobile) {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  useEffect(() => {
    const particleContainer = particleContainerRef.current;
    if (!particleContainer) return;
    
    // Clear existing particles
    particleContainer.innerHTML = '';
    
    // Skip particles completely on very low-end devices
    if (isLowPerfDevice && isMobile) {
      // Add a simple static gradient background instead
      const staticBg = document.createElement('div');
      staticBg.classList.add('static-particle-bg');
      staticBg.style.position = 'absolute';
      staticBg.style.inset = '0';
      staticBg.style.opacity = '0.2';
      staticBg.style.background = isDarkMode 
        ? 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4), rgba(7, 89, 133, 0.1))'
        : 'radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.5), rgba(186, 230, 253, 0.2))';
      particleContainer.appendChild(staticBg);
      return;
    }
    
    // Extremely reduced particle count for mobile
    const particleCount = isMobile ? 8 : 
                         window.innerWidth > 1400 ? 40 : 
                         window.innerWidth > 768 ? 25 : 12;
    
    // Simplified animation for better performance
    const simpleAnimationTypes = [
      // Simple float
      (duration, delay) => `float ${duration}s linear infinite ${delay}s`,
      
      // Simple drift
      (duration, delay) => `simpleDrift ${duration}s ease-in-out infinite alternate ${delay}s`,
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Use larger, fewer particles
      const size = isMobile 
        ? Math.random() * 6 + 3 // 3-9px on mobile
        : Math.random() * 10 + 4; // 4-14px elsewhere
        
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Longer durations = better performance
      const duration = isMobile
        ? Math.random() * 15 + 30 // 30-45s on mobile  
        : Math.random() * 20 + 25; // 25-45s elsewhere
        
      const delay = Math.random() * 5; // Reduced delay variation
      
      // Simple animations
      const animIndex = Math.floor(Math.random() * simpleAnimationTypes.length);
      const animation = simpleAnimationTypes[animIndex](duration, delay);
      
      // Apply styles - use opacity sparingly
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.bottom = `${posY}%`;
      particle.style.opacity = `${Math.random() * 0.15 + 0.05}`; // Very subtle
      particle.style.animation = animation;
      particle.style.zIndex = "-1";
      
      // Eliminate blur on mobile
      if (!isMobile && Math.random() > 0.8) {
        particle.style.filter = `blur(${Math.random()}px)`;
      }
      
      particleContainer.appendChild(particle);
    }
    
    // Add simpler animations to the stylesheet
    if (!document.getElementById('particle-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'particle-animations';
      styleSheet.innerHTML = `
        @keyframes simpleDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}50px, ${Math.random() > 0.5 ? '' : '-'}30px); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    // Cleanup function
    return () => {
      if (particleContainer) {
        particleContainer.innerHTML = '';
      }
    };
  }, [isDarkMode, isMobile, isLowPerfDevice]);
  
  return (
    <div 
      ref={particleContainerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    />
  );
};

export default React.memo(BackgroundParticles); 
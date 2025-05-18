import React, { useContext, useEffect, useState, memo } from 'react'
import './About.scss'
import { ThemeContext } from '../../../ThemeContext'

// Memoize the about content to prevent unnecessary re-renders
const AboutContent = memo(({ isDarkMode }) => (
  <div className={`about-text p-6 rounded-xl will-change-auto ${
    isDarkMode 
      ? 'bg-blue-900/40 border border-blue-800/60' 
      : 'bg-white/50 border border-gray-200/80'
  }`}>
    <p className={`text-md sm:text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      Hey!👋 I'm a Front-End Developer, Graphic Designer, and Motion Designer who loves bringing ideas to life through clean code and eye-catching design. I focus on creating smooth, user-friendly websites and visuals that feel modern and meaningful.
    </p>
    
    <div className={`my-4 h-[1px] w-full ${isDarkMode ? 'bg-blue-700/50' : 'bg-orange-200/70'}`}></div>
    
    <p className={`text-md sm:text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      I work with tools like React, Photoshop, and have a solid foundation in Linux. I enjoy combining design and development to create experiences that are both functional and visually engaging.
    </p>
    
    <div className={`my-4 h-[1px] w-full ${isDarkMode ? 'bg-blue-700/50' : 'bg-orange-200/70'}`}></div>
    
    <p className={`text-md sm:text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      I'm always curious, always improving, and always looking for new ways to make digital work more creative, more useful, and more fun. Whether it's a simple animation or a full web app, I'm all in on the details that make a big difference.
    </p>
  </div>
));

AboutContent.displayName = 'AboutContent';

// Main component memoized for performance
const About = memo(() => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check device once on mount and don't recheck on every render
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // Debounced resize handler - only update after resize completes
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 250);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  
  // Simplified background for mobile
  const bgStyle = isMobile 
    ? { background: isDarkMode ? 'rgba(23, 37, 84, 0.7)' : 'rgba(243, 244, 246, 0.7)' }
    : {};
  
  return (
    <section 
      className={`about-section py-12 relative ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
      style={bgStyle}
    >
      {/* Only render backdrop blur on desktop */}
      {!isMobile && (
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-950/30' : 'bg-blue-50/30'} backdrop-blur-[2px]`}></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="about-container flex md:flex-row flex-col justify-between gap-6 md:gap-10">
          <div className="about-head md:w-[26%] w-full">
            <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-3 rounded-full"></div>
            <h2 className='font-bold text-2xl sm:text-3xl mb-3'>About me</h2>
            <p className={`text-xs sm:text-sm max-w-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Front-End Developer & Designer with passion for creating engaging experiences
            </p>
          </div>
          
          <div className="about-content md:w-[70%] w-full">
            <AboutContent isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
import React, { useContext, useEffect, useState, memo } from 'react'
import './About.scss'
import { ThemeContext } from '../../../ThemeContext'

// Memoize the about content to prevent unnecessary re-renders
const AboutContent = memo(({ isDarkMode }) => (
  <div className={`about-text p-6 sm:p-7 rounded-xl ${
    isDarkMode 
      ? 'bg-blue-900/40 border border-blue-800/60' 
      : 'bg-white/60 border border-gray-200/80'
  }`}>
    <p className={`text-md sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      Hey!👋 I'm a Front-End Developer, Graphic Designer, and Motion Designer who loves bringing ideas to life through clean code and eye-catching design. I focus on creating smooth, user-friendly websites and visuals that feel modern and meaningful.
    </p>
    
    <div className={`my-4 h-[1px] w-full ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-700/50 to-transparent' : 'bg-gradient-to-r from-transparent via-orange-200 to-transparent'}`}></div>
    
    <p className={`text-md sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      I work with tools like React, Photoshop, and have a solid foundation in Linux. I enjoy combining design and development to create experiences that are both functional and visually engaging.
    </p>
    
    <div className={`my-4 h-[1px] w-full ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-700/50 to-transparent' : 'bg-gradient-to-r from-transparent via-orange-200 to-transparent'}`}></div>
    
    <p className={`text-md sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      I'm always curious, always improving, and always looking for new ways to make digital work more creative, more useful, and more fun. Whether it's a simple animation or a full web app, I'm all in on the details that make a big difference.
    </p>
  </div>
));

AboutContent.displayName = 'AboutContent';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className={`about-section py-12 sm:py-14 relative ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      {/* Conditional backdrop blur - only on non-mobile devices */}
      {!isMobile && (
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-950/30' : 'bg-blue-50/30'} backdrop-blur-[2px]`}></div>
      )}
      
      {/* Simple background color for mobile */}
      {isMobile && (
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-950/50' : 'bg-blue-50/50'}`}></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="about-container flex md:flex-row sm:flex-col flex-col justify-between gap-6 md:gap-10">
          <div className="about-head md:w-[26%] sm:w-full">
            <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-3 rounded-full"></div>
            <h2 className='font-bold text-2xl sm:text-3xl mb-3'>About me</h2>
            <p className={`text-xs sm:text-sm max-w-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Front-End Developer & Designer with passion for creating engaging experiences
            </p>
          </div>
          
          <div className="about-content md:w-[70%] sm:w-full">
            <AboutContent isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
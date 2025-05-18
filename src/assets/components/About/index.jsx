import React, { useContext, useEffect, useState, memo } from 'react'
import './About.scss'
import { ThemeContext } from '../../../ThemeContext'

// Ultra-optimized content component with maximum transparency
const AboutContent = memo(({ isDarkMode }) => (
  <div className={`about-text p-5 sm:p-6 rounded-xl ${
    isDarkMode 
      ? 'bg-transparent backdrop-blur-[1px]' 
      : 'bg-transparent backdrop-blur-[1px]'
  }`}>
    <div className={`relative p-5 sm:p-6 ${isDarkMode ? 'text-white/90' : 'text-gray-800/90'}`}>
      {/* Semi-transparent gradient background for text legibility */}
      <div className="absolute inset-0 rounded-xl -z-10" 
        style={{
          background: isDarkMode 
            ? 'linear-gradient(180deg, rgba(30, 58, 138, 0.15) 0%, rgba(15, 23, 42, 0.1) 100%)' 
            : 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(241, 245, 249, 0.15) 100%)'
        }}
      />
      
      <p className="text-md sm:text-lg mb-4">
        Hey!👋 I'm a Front-End Developer, Graphic Designer, and Motion Designer who loves bringing ideas to life through clean code and eye-catching design. I focus on creating smooth, user-friendly websites and visuals that feel modern and meaningful.
      </p>
      
      <div className={`h-[1px] w-full mb-4 ${isDarkMode ? 'bg-blue-700/20' : 'bg-orange-200/30'}`}></div>
      
      <p className="text-md sm:text-lg mb-4">
        I work with tools like React, Photoshop, and have a solid foundation in Linux. I enjoy combining design and development to create experiences that are both functional and visually engaging.
      </p>
      
      <div className={`h-[1px] w-full mb-4 ${isDarkMode ? 'bg-blue-700/20' : 'bg-orange-200/30'}`}></div>
      
      <p className="text-md sm:text-lg">
        I'm always curious, always improving, and always looking for new ways to make digital work more creative, more useful, and more fun. Whether it's a simple animation or a full web app, I'm all in on the details that make a big difference.
      </p>
    </div>
  </div>
));

AboutContent.displayName = 'AboutContent';

// Main component - fully transparent parent
const About = memo(() => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className="about-section py-12 relative">
      {/* Fully transparent background for the entire section */}
      <div className="absolute inset-0 -z-10" 
        style={{
          background: 'transparent'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="about-container flex md:flex-row flex-col justify-between gap-6 md:gap-10">
          <div className={`about-head md:w-[26%] w-full ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-3 rounded-full"></div>
            <h2 className='font-bold text-2xl sm:text-3xl mb-3'>About me</h2>
            <p className={`text-xs sm:text-sm max-w-xs ${isDarkMode ? 'text-gray-300/90' : 'text-gray-600/90'}`}>
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
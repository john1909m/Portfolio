import React, { useContext, memo } from 'react'
import './Header.scss'
import { ThemeContext } from '../../../ThemeContext'

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <>
      <div className='cover-container'>
        <img src="/images/creative_workspace_laptop_design_vs_code.jpg" alt="Cover photo" loading="eager" />
      </div>

      <div className="profile-container flex h-[95vh] w-full justify-center items-center">
        <div className={`profile rounded-2xl sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col p-6 transition-all duration-500 ease-in-out backdrop-blur-md 
          ${isDarkMode 
            ? 'bg-gradient-to-br from-darkCard/80 to-darkBg/80 border border-gray-700/50 shadow-card-dark' 
            : 'bg-gradient-to-br from-white/90 to-lightBg/90 border border-gray-200/50 shadow-card-light'}`}>

          <div className="relative mx-auto">
            <div className={`absolute inset-0 rounded-full blur-md -z-1 transform scale-110 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-500 via-purple-600 to-primary-500 opacity-30' 
                : 'bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 opacity-20'
            }`}></div>
            <img 
              className='profile-photo relative w-[250px] h-[250px] rounded-full transition-all duration-300 hover:shadow-xl object-cover' 
              src="/images/IMG_36834.webp" 
              alt="Profile Photo" 
              loading="eager"
            />
          </div>

          <div className="profile-info flex flex-col mt-6">
            <h1 className='My-name sm:text-4xl md:text-5xl font-bold mb-4 text-center'>John Emil</h1>
            <h3 className='text-2xl text-orange-500 font-semibold text-center'>Front-End Developer (React.Js) & Graphic Designer</h3>
            
            <div className={`my-8 h-[1px] w-[80%] mx-auto ${isDarkMode ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`}></div>
            
            <div className="contact-info space-y-3 mb-6">
              <p className='text-lg'><span className={`inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-orange-500/10 text-orange-500'}`}>✉️</span>johnemil21@yahoo.com</p>
              <p className='text-lg'><span className={`inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-orange-500/10 text-orange-500'}`}>📞</span>+201200158852</p>
              <p className='text-lg'><span className={`inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-orange-500/10 text-orange-500'}`}>📍</span>Giza - October</p>
            </div>
            
            <div className="profile-links flex justify-center space-x-6 w-full">
              <a href="https://github.com/john1909m" target="_blank" rel="noopener noreferrer">
                <img className={`w-12 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full ${isDarkMode ? 'dark-icon' : 'bg-orange-500'}`} src="/images/github-142-svgrepo-com (1).svg" alt="GitHub" />
              </a>
              <a href="https://www.behance.net/JohnEmil21" target="_blank" rel="noopener noreferrer">
                <img className={`w-12 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full ${isDarkMode ? 'dark-icon' : 'bg-orange-500'}`} src="/images/behance-round-svgrepo-com.svg" alt="Behance" />
              </a>
              <a href="https://www.linkedin.com/in/john-emil-0134a3239/" target="_blank" rel="noopener noreferrer">
                <img className={`w-12 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full ${isDarkMode ? 'dark-icon' : 'bg-orange-500'}`} src="/images/linkedin-round-svgrepo-com.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/_john_emil_" target="_blank" rel="noopener noreferrer">
                <img className={`w-12 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full ${isDarkMode ? 'dark-icon' : 'bg-orange-500'}`} src="/images/instagram-f-svgrepo-com.svg" alt="Instagram" />
              </a>
            </div>
            <div className='h-[3vh]'></div>

            <a href="https://drive.google.com/file/d/118MmjR5vW9WNxre-y199NCZJMbN02tBA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mx-auto">
              <button className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-bold text-[16px] hover:from-transparent hover:to-transparent border border-transparent hover:border-orange-500 hover:text-orange-500 transition-all hover:translate-y-1 hover:scale-105 ${isDarkMode ? 'hover:shadow-dark-glow' : 'hover:shadow-light-glow'}`}>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
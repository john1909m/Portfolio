import React, { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'

export const PortfolioCardWeb = ({image,Name,gitHub,liveDemo}) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`group portfolio-card h-[50vh] flex flex-col justify-between rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl
    ${isDarkMode 
        ? 'bg-gradient-to-b from-darkCard to-darkBg border border-gray-800 shadow-card-dark hover:border-purple-500/50' 
        : 'bg-gradient-to-b from-white to-lightBg border border-gray-200 shadow-card-light hover:border-orange-500/50'}`}>
      
      {/* Image container with zoom effect */}
      <div className="overflow-hidden h-3/5 relative">
        <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-darkBg/50' : 'from-black/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}></div>
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={image} 
          alt={Name} 
        />
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col space-y-3 flex-grow">
        <h3 className={`text-center text-xl font-semibold mb-1 ${isDarkMode ? 'text-purple-200' : ''}`}>{Name}</h3>
        
        <div className="card-buttons flex justify-center gap-4 mt-auto">
          <a 
            target='_blank' 
            href={gitHub}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-center transition-all duration-300 text-sm
            ${isDarkMode 
              ? 'border border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
              : 'border border-orange-500 text-orange-600 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'}`}
          >
            GitHub
          </a>
          <a 
            target='_blank' 
            href={liveDemo}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-center transition-all duration-300 text-sm
            ${isDarkMode 
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
              : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'}`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

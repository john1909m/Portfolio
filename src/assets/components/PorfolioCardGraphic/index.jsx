import React, { useContext } from 'react'
import "./PortfolioCardGraphic.scss"
import { ThemeContext } from '../../../ThemeContext'

const PortfolioCardGraphic = ({image}) => {
    const { isDarkMode } = useContext(ThemeContext);
    
  return (
    <div className={`group portfolio-card h-fit overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl
    ${isDarkMode 
        ? 'bg-gradient-to-b from-darkCard to-darkBg border border-gray-800 shadow-card-dark hover:border-purple-500/50' 
        : 'bg-gradient-to-b from-white to-lightBg border border-gray-200 shadow-card-light hover:border-orange-500/50'}`}>
      
      {/* Image with overlay effect on hover */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center
        ${isDarkMode ? 'bg-darkBg/70 backdrop-blur-sm' : 'bg-white/70 backdrop-blur-sm'}`}>
          <span className={`transform scale-0 group-hover:scale-100 transition-transform duration-300 font-semibold text-lg px-4 py-2 rounded-full 
          ${isDarkMode 
            ? 'bg-purple-500/30 text-purple-200 border border-purple-400/30' 
            : 'bg-orange-500/20 text-orange-700 border border-orange-400/30'}`}>
            View Design
          </span>
        </div>
        <img 
          className="w-full transition-transform duration-500 group-hover:scale-110" 
          src={image} 
          alt="Graphic Design" 
        />
      </div>
    </div>
  )
}

export default PortfolioCardGraphic
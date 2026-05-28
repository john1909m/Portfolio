import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../ThemeContext'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

export const PortfolioCardWeb = ({ image, Name, gitHub, liveDemo, index }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`portfolio-card-web ${isDarkMode ? 'dark' : 'light'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Image Container */}
        <div className="card-image-container">
          <img 
            className="card-image" 
            src={image} 
            alt={Name} 
            loading="lazy"
          />
          
          {/* Overlay on hover */}
          <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
            <div className="overlay-content">
              <FaCode className="overlay-icon" />
              <span className="overlay-text">View Project</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="card-content">
          <h3 className="project-title">{Name}</h3>
          
          <div className="card-buttons">
            <a 
              target='_blank' 
              href={gitHub}
              className={`btn-github ${isDarkMode ? 'dark' : 'light'}`}
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a 
              target='_blank' 
              href={liveDemo}
              className={`btn-demo ${isDarkMode ? 'dark' : 'light'}`}
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
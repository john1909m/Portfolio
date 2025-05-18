import React, { useState, useContext, memo, useEffect } from 'react'
import "./Portfolio.scss"
import {Graphic, Web} from "../PorfolioDataWeb"
import { PortfolioCardWeb } from '../PortfolioCardWeb'
import PortfolioCardGraphic from '../PorfolioCardGraphic'
import { ThemeContext } from '../../../ThemeContext'
import { FaLaptopCode, FaPaintBrush, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

// Memoized category button for performance
const CategoryButton = memo(({ isActive, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`category-btn flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg transform scale-105' 
        : 'bg-gray-100/70 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-blue-800/50'
    }`}
  >
    <span className={`${isActive ? 'text-white' : ''}`}>{icon}</span>
    <span>{label}</span>
  </button>
));

CategoryButton.displayName = 'CategoryButton';

export const Portfolio = memo(() => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices once on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCategory(category);
        setIsAnimating(false);
        setVisibleProjects(4); // Reset visible projects when changing categories
      }, 300);
    }
  };

  const loadMoreProjects = () => {
    const currentProjects = selectedCategory === 'web' ? Web : Graphic;
    if (visibleProjects < currentProjects.length) {
      setVisibleProjects(prevValue => prevValue + 4);
    }
  };
  
  const currentProjects = selectedCategory === 'web' ? Web : Graphic;
  const renderedProjects = currentProjects.slice(0, visibleProjects);
  
  const renderPortfolioItems = () => {
    if (selectedCategory === 'web') {
      return renderedProjects.map((card, index) => (
        <PortfolioCardWeb key={`web-${index}`} {...card} />
      ));
    } else {
      return renderedProjects.map((card, index) => (
        <PortfolioCardGraphic key={`graphic-${index}`} {...card} />
      ));
    }
  };
    
  return (
    <section className={`portfolio-section py-16 ${isDarkMode ? 'bg-gradient-to-b from-transparent to-blue-950/30 text-white' : 'bg-gradient-to-b from-transparent to-blue-50/30 text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header with animated accent */}
        <div className="portfolio-header flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="portfolio-title mb-8 md:mb-0 relative">
            <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-3 rounded-full"></div>
            <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-2 tracking-tight'>My Portfolio</h2>
            <p className={`text-sm max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A showcase of my web development and graphic design projects
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="portfolio-tabs md:ml-auto">
            <div className={`tab-container p-2 rounded-xl backdrop-blur-sm border ${
              isDarkMode ? 'bg-blue-900/20 border-blue-800/50' : 'bg-white/70 border-gray-200/50'
            } flex gap-2`}>
              <CategoryButton 
                isActive={selectedCategory === 'web'}
                onClick={() => handleCategoryChange('web')}
                icon={<FaLaptopCode />}
                label="Web Projects"
              />
              <CategoryButton 
                isActive={selectedCategory === 'graphic'}
                onClick={() => handleCategoryChange('graphic')}
                icon={<FaPaintBrush />}
                label="Graphic Design"
              />
            </div>
          </div>
        </div>
        
        {/* Category Description */}
        <div className={`portfolio-description mb-10 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
              isDarkMode 
                ? 'bg-blue-900/40 text-orange-400' 
                : 'bg-orange-100 text-orange-500'
            }`}>
              {selectedCategory === 'web' ? <FaLaptopCode size={20} /> : <FaPaintBrush size={20} />}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                {selectedCategory === 'web' ? 'Web Development Projects' : 'Graphic Design Portfolio'}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}>
                {selectedCategory === 'web' 
                  ? 'Interactive web applications built with modern frameworks and technologies. Each project showcases different skills and approaches.'
                  : 'Creative designs and visual artwork showcasing my skills in graphic design, branding, and digital illustration.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className={`portfolio-grid transition-all duration-500 ${isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
            {renderPortfolioItems()}
          </div>
          
          {/* Load More Button */}
          {visibleProjects < currentProjects.length && (
            <div className="mt-12 text-center">
              <button 
                onClick={loadMoreProjects}
                className={`inline-flex items-center px-8 py-3 rounded-xl font-medium transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-blue-900/40 text-white hover:bg-orange-500' 
                    : 'bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white'}
                  transform hover:translate-y-[-2px] shadow-md`}
              >
                Load More Projects
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          )}
        </div>
        
        {/* View All Link */}
        <div className="mt-16 text-center">
          <a 
            href={selectedCategory === 'web' ? 'https://github.com/john1909m' : 'https://www.behance.net/JohnEmil21'} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white transition-all duration-300
              bg-gradient-to-r from-orange-500 to-orange-600 
              hover:from-orange-600 hover:to-orange-700 transform hover:translate-y-[-2px]
              shadow-lg hover:shadow-orange-500/25`}
          >
            {selectedCategory === 'web' ? 'View All GitHub Projects' : 'Browse Complete Behance Portfolio'}
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';

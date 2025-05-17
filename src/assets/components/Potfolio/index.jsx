import React, { useState, useContext } from 'react'
import "./Portfolio.scss"
import {Graphic, Web} from "../PorfolioDataWeb"
import { PortfolioCardWeb } from '../PortfolioCardWeb'
import PortfolioCardGraphic from '../PorfolioCardGraphic'
import { ThemeContext } from '../../../ThemeContext'
import { FaLaptopCode, FaPaintBrush, FaArrowRight } from 'react-icons/fa'

export const Portfolio = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [selectedCategory, setSelectedCategory] = useState('web');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleCategoryChange = (category) => {
      if (category !== selectedCategory) {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedCategory(category);
          setIsAnimating(false);
        }, 300);
      }
    };

    const renderPorfolioWeb = Web.map((card, index) => (
      <PortfolioCardWeb key={index} {...card} />
    ));

    const renderPorfolioGraphic = Graphic.map((card, index) => (
      <PortfolioCardGraphic key={index} {...card} />
    ));
    
    return (
      <section className="portfolio-section py-10 text-gray-800 dark:text-white">
        <div className="container mx-auto px-5">
          <div className="portfolio-header flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div className="portfolio-title mb-6 md:mb-0">
              <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full"></div>
              <h2 className='font-bold text-3xl mb-2'>Portfolio</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
                A showcase of my web development and graphic design projects
              </p>
            </div>
            
            <div className="portfolio-tabs">
              <div className="tab-container p-2 rounded-xl bg-gray-100/70 dark:bg-blue-900/50 backdrop-blur-sm border border-gray-200 dark:border-blue-800 flex">
                <button 
                  onClick={() => handleCategoryChange('web')}
                  className={`tab-button flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === 'web' 
                      ? 'bg-orange-500 text-white font-semibold shadow-lg' 
                      : 'hover:bg-gray-200/80 dark:hover:bg-blue-800/70 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <FaLaptopCode /> Web Design
                </button>
                <button 
                  onClick={() => handleCategoryChange('graphic')}
                  className={`tab-button flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === 'graphic' 
                      ? 'bg-orange-500 text-white font-semibold shadow-lg' 
                      : 'hover:bg-gray-200/80 dark:hover:bg-blue-800/70 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <FaPaintBrush /> Graphic Design
                </button>
              </div>
            </div>
          </div>
          
          <div className={`portfolio-content-wrapper transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="portfolio-description mb-8">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                {selectedCategory === 'web' ? (
                  <>
                    <FaLaptopCode className="mr-2 text-orange-500" />
                    Web Development Projects
                  </>
                ) : (
                  <>
                    <FaPaintBrush className="mr-2 text-orange-500" />
                    Graphic Design Portfolio
                  </>
                )}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                {selectedCategory === 'web' 
                  ? 'Interactive web applications built with modern frameworks and technologies. Click on any project to see details.'
                  : 'Creative designs and visual art showcasing my skills in graphic design and digital illustration.'}
              </p>
            </div>
            
            <div className="portfolio-grid grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              {selectedCategory === 'web' ? renderPorfolioWeb : renderPorfolioGraphic}
            </div>
            
            <div className="view-all-projects mt-10 text-center">
              <a 
                href={selectedCategory === 'web' ? 'https://github.com/john1909m' : 'https://www.behance.net/JohnEmil21'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-blue-900 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white text-gray-800 dark:text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-700/20"
              >
                View all {selectedCategory === 'web' ? 'code repositories' : 'design work'}
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

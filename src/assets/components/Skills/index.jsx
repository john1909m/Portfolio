import React, { useContext, useState, useEffect, useRef, memo } from 'react'
import "./Skills.scss"
import { ThemeContext } from '../../../ThemeContext'
import { FaCode, FaDesktop, FaPalette, FaLayerGroup } from 'react-icons/fa'

// Memoize the skill card component to prevent unnecessary re-renders
const SkillCard = memo(({ skill, index, isDarkMode, isVisible }) => {
  return (
    <div 
      className={`skill-card p-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 ${
        isDarkMode 
          ? 'bg-blue-900/30 border border-blue-800/50 hover:border-orange-500/70' 
          : 'bg-white/90 border border-gray-200/80 hover:border-orange-500/70'
      } skill-card-${index}`}
    >
      <div className="skill-icon-wrapper mb-3 relative">
        <div className={`skill-icon-bg absolute inset-0 rounded-full blur-md opacity-20 ${
          isDarkMode ? 'bg-orange-500' : 'bg-orange-400'
        }`}></div>
        <div className="skill-icon relative flex items-center justify-center w-12 h-12 mx-auto">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            width="28"
            height="28"
            loading="lazy"
            className="w-7 h-7 object-contain skill-icon-img"
          />
        </div>
      </div>
      
      <h3 className="skill-name text-center font-semibold mb-3">{skill.name}</h3>
      
      <div className="skill-progress-container">
        <div className="skill-level flex justify-between text-xs mb-1">
          <span>Proficiency</span>
          <span className="percentage-display">{skill.level}%</span>
        </div>
        <div className={`skill-progress-bg h-2 w-full rounded-full ${
          isDarkMode ? 'bg-blue-800/50' : 'bg-gray-200'
        }`}>
          <div 
            className="skill-progress-bar h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionProperty: 'width',
              transitionDuration: '1s',
              transitionTimingFunction: 'ease-out',
              transitionDelay: `${index * 0.05}s`,
              willChange: 'width'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

export const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Define skillCategories before using it in any hooks
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'HTML', level: 90, icon: '/images/html-5-svgrepo-com.svg' },
        { name: 'CSS', level: 85, icon: '/images/css-3-svgrepo-com.svg' },
        { name: 'Javascript', level: 80, icon: '/images/javascript-svgrepo-com.svg' },
        { name: 'React.Js', level: 85, icon: '/images/react-svgrepo-com.svg' },
        { name: 'Vite.Js', level: 75, icon: '/images/vite-svgrepo-com.svg' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <FaDesktop />,
      skills: [
        { name: 'Git & GitHub', level: 80, icon: '/images/github-142-svgrepo-com (1).svg' },
        { name: 'Responsive Design', level: 85, icon: '/images/responsive-design-svgrepo-com.svg' }
      ]
    },
    {
      id: 'design',
      title: 'Design',
      icon: <FaPalette />,
      skills: [
        { name: 'Photoshop', level: 90, icon: '/images/photoshop-cc-logo-svgrepo-com.svg' },
        { name: 'Illustrator', level: 85, icon: '/images/adobe-illustrator-svgrepo-com.svg' }
      ]
    },
    {
      id: 'video',
      title: 'Video Editing',
      icon: <FaLayerGroup />,
      skills: [
        { name: 'Premiere Pro', level: 85, icon: '/images/adobe-premiere-svgrepo-com.svg' },
        { name: 'After Effects', level: 80, icon: '/images/after-effects-cc-logo-svgrepo-com.svg' }
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Small delay to ensure component is fully visible before animating
        setTimeout(() => setShouldAnimate(true), 100);
      } else {
        setIsVisible(false);
        setShouldAnimate(false);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Optimize category change to reset animations properly
  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setShouldAnimate(false);
    setActiveCategory(categoryId);
    setTimeout(() => setShouldAnimate(true), 50);
  };

  // Get current category skills
  const currentSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section 
      ref={sectionRef} 
      className={`skills-container py-10 transition-colors duration-300 ${isDarkMode ? 'bg-blue-950 text-white' : 'bg-blue-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header text-center mb-6">
          <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-2 rounded-full mx-auto"></div>
          <h2 className='font-bold text-2xl sm:text-3xl mb-2'>My Skills</h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Expertise in front-end development and creative design tools
          </p>
        </div>
        
        {/* Category Nav */}
        <div className="category-nav flex flex-wrap justify-center mb-5 gap-2 sm:gap-4">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`category-btn flex items-center px-4 py-2 rounded-full text-xs sm:text-sm transition-colors duration-300 border ${
                activeCategory === category.id
                  ? isDarkMode 
                    ? 'bg-orange-500 text-white border-orange-600' 
                    : 'bg-orange-500 text-white border-orange-600'
                  : isDarkMode
                    ? 'bg-blue-900/40 text-gray-300 border-blue-800/50 hover:bg-blue-800/50'
                    : 'bg-white/90 text-gray-700 border-gray-200/80 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills Container */}
        <div className="skills-display pb-2">
          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentSkills.map((skill, index) => (
              <SkillCard 
                key={`${activeCategory}-${skill.name}`}
                skill={skill}
                index={index}
                isDarkMode={isDarkMode}
                isVisible={shouldAnimate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

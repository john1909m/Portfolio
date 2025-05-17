import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, #ffd700, #ff8c00)' 
          : 'linear-gradient(145deg, #0f172a, #334155)',
        boxShadow: isDarkMode 
          ? '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 10px rgba(255, 140, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)' 
          : '0 0 20px rgba(15, 23, 42, 0.5), inset 0 0 10px rgba(51, 65, 85, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)',
        border: isDarkMode
          ? '2px solid rgba(255, 140, 0, 0.3)'
          : '2px solid rgba(51, 65, 85, 0.3)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
      aria-label="Toggle theme"
    >
      <div className="relative transition-all duration-500">
        {isDarkMode ? (
          <FaSun className="text-darkBg text-2xl" />
        ) : (
          <FaMoon className="text-white text-2xl" />
        )}
      </div>
      
      {/* Element that creates the glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(148, 163, 184, 0.4) 0%, transparent 70%)',
          filter: 'blur(8px)',
          transform: 'scale(1.3)',
          pointerEvents: 'none'
        }}
      />
    </button>
  );
};

export default ThemeToggle; 
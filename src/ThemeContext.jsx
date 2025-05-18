import React, { createContext, useState, useEffect, useMemo } from 'react';

// Define theme color utilities
const lightColors = {
  background: 'bg-gradient-to-b from-gray-50 to-blue-50',
  text: 'text-gray-800',
  textSecondary: 'text-gray-600',
  textMuted: 'text-gray-500/80',
  accent: 'text-orange-500',
  accentHover: 'text-orange-600',
  card: 'bg-white/90',
  cardBorder: 'border-gray-200/50',
  divider: 'bg-gray-200',
  highlight: 'bg-orange-500/10',
  input: 'bg-white',
  inputBorder: 'border-gray-300',
};

const darkColors = {
  background: 'bg-gradient-to-b from-gray-900 to-blue-950',
  text: 'text-white',
  textSecondary: 'text-gray-300',
  textMuted: 'text-gray-400/80',
  accent: 'text-orange-500',
  accentHover: 'text-orange-400',
  card: 'bg-blue-900/30',
  cardBorder: 'border-blue-800/50',
  divider: 'bg-blue-800/50',
  highlight: 'bg-orange-500/20',
  input: 'bg-blue-900/50',
  inputBorder: 'border-blue-700',
};

// Create context with enhanced functionality
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if theme preference is saved in local storage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Create a memoized object with current theme colors to avoid unnecessary rerenders
  const themeColors = useMemo(() => {
    return isDarkMode ? darkColors : lightColors;
  }, [isDarkMode]);
  
  // Create theme utility functions
  const getColorClass = (type) => themeColors[type] || '';
  
  // Get gradient classes for buttons and elements
  const getGradient = (variant = 'primary') => {
    if (variant === 'primary') {
      return `bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white`;
    }
    if (variant === 'secondary') {
      return isDarkMode 
        ? 'bg-blue-900/30 hover:bg-blue-800/50 text-white' 
        : 'bg-gray-100 hover:bg-gray-200 text-gray-800';
    }
    return '';
  };
  
  // Get border classes based on theme
  const getBorder = (intensity = 'normal') => {
    if (intensity === 'light') {
      return isDarkMode ? 'border border-blue-900/30' : 'border border-gray-100/80';
    }
    if (intensity === 'normal') {
      return isDarkMode ? 'border border-blue-800/50' : 'border border-gray-200/70';
    }
    if (intensity === 'strong') {
      return isDarkMode ? 'border border-blue-700/70' : 'border border-gray-300/80';
    }
    return '';
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme,
      colors: themeColors,
      getColorClass,
      getGradient,
      getBorder
    }}>
      {children}
    </ThemeContext.Provider>
  );
}; 
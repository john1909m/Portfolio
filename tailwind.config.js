/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '350px',
        // => @media (min-width: 992px) { ... }
        'md': '630px',
      },
      colors: {
        // Light mode colors
        lightBg: '#f3f4ff',
        lightCard: '#ffffff',
        lightAccent: '#FF6E2C',
        lightAccentHover: '#ff8345',
        lightText: '#1a202c',
        lightTextSecondary: '#4a5568',
        
        // Dark mode colors
        darkBg: '#0f172a',
        darkCard: '#1E1E1E',
        darkAccent: '#FF6E2C',
        darkAccentHover: '#ff8345',
        darkText: '#f8fafc',
        darkTextSecondary: '#cbd5e1',
        
        // Shared accent colors
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      boxShadow: {
        'dark-glow': '0 0 20px rgba(255, 110, 44, 0.5)',
        'light-glow': '0 0 20px rgba(255, 110, 44, 0.3)',
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
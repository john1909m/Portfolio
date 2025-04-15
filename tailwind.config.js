/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        // => @media (min-width: 992px) { ... }
        'md': '630px',
      },
    },
  },
  plugins: [],
}
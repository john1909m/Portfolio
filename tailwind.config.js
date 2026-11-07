/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          surface: 'var(--color-paper-surface)',
          card: 'var(--color-paper-card)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-ink-muted)',
          border: 'var(--color-ink-border)',
        },
        tomato: '#FF4F2E',
        marigold: '#FFB400',
        lime: '#C8F169',
        mint: '#7ED6A8',
        pink: '#FF8FB1',
        violet: '#9B6BFF',
        burgundy: '#800020',

      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
    },
  },
  plugins: [],
}

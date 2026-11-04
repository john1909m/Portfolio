import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-border bg-paper-surface hover:bg-paper text-ink text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
    >
      {isDarkMode ? (
        <>
          <HiOutlineSun className="w-3.5 h-3.5 text-marigold" aria-hidden="true" />
          <span>Light</span>
        </>
      ) : (
        <>
          <HiOutlineMoon className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;

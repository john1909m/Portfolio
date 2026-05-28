import { memo, useContext, useEffect, useState, useCallback } from 'react';
import { ThemeContext } from '../../ThemeContext';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineCodeBracket,
} from 'react-icons/hi2';
import './SiteNav.scss';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: HiOutlineHome },
  { id: 'about', label: 'About', icon: HiOutlineUser },
  { id: 'skills', label: 'Skills', icon: HiOutlineCodeBracket },
  { id: 'portfolio', label: 'Work', icon: HiOutlineBriefcase },
  { id: 'education', label: 'Education', icon: HiOutlineAcademicCap },
  { id: 'contact', label: 'Contact', icon: HiOutlineEnvelope },
];

const HEADER_OFFSET = 80;

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

const SiteNav = memo(({ activeTab, onNavClick }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = useCallback(
    (id) => {
      onNavClick?.(id);
      scrollToSection(id);
    },
    [onNavClick]
  );

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav__inner" aria-label="Primary">
        <a href="#home" className="site-nav__brand" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
          <span className="site-nav__brand-mark" aria-hidden="true">JE</span>
          <span className="site-nav__brand-text">John Emil</span>
        </a>
        <ul className="site-nav__links" role="list">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                type="button"
                className={`site-nav__link ${activeTab === id ? 'site-nav__link--active' : ''}`}
                onClick={() => handleNav(id)}
                aria-current={activeTab === id ? 'page' : undefined}
              >
                <Icon className="site-nav__link-icon" aria-hidden="true" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="site-nav__theme"
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
});

SiteNav.displayName = 'SiteNav';
export default SiteNav;

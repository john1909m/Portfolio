import { memo } from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowUp } from 'react-icons/hi2';

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-paper border-t border-ink-border text-xs font-mono text-ink-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-ink font-medium">
            John Emil &middot; Software Engineer
          </p>
          <p>
            &copy; {currentYear} John Emil. Built with React &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/john1909m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-ink-border hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-emil-0134a3239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-ink-border hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.behance.net/JohnEmil21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-ink-border hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="Behance"
            >
              <FaBehance className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/_john_emil_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-ink-border hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-ink-border hover:bg-paper-surface text-ink transition-colors focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <HiOutlineArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;

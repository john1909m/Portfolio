import { memo, useState, useEffect } from 'react';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import portraitPlaceholder from '../../assets/images/portrait-placeholder.png';

const CV_DRIVE_URL = 'https://drive.google.com/file/d/1a0y9pBcW8qYzyLAxp5l8wL9Z5TLsGr9f/view?usp=sharing';
const LINKEDIN_URL = 'https://www.linkedin.com/in/johnemil/';
const GITHUB_URL = 'https://github.com/john1909m';

export const Header = memo(({ onLoaded }) => {
  const [nameEntered, setNameEntered] = useState(false);
  const [summaryEntered, setSummaryEntered] = useState(false);
  const [portraitEntered, setPortraitEntered] = useState(false);

  useEffect(() => {
    // Name and role fade and rise in once on load (300–400ms, ease-out)
    const timerName = setTimeout(() => setNameEntered(true), 30);
    // Summary fades in after (+100ms)
    const timerSummary = setTimeout(() => setSummaryEntered(true), 130);
    // Portrait fades in after summary (+100ms) and notifies parent that header loaded
    const timerPortrait = setTimeout(() => {
      setPortraitEntered(true);
      onLoaded?.();
    }, 230);

    return () => {
      clearTimeout(timerName);
      clearTimeout(timerSummary);
      clearTimeout(timerPortrait);
    };
  }, [onLoaded]);

  return (
    <header className="relative border-b border-ink-border bg-paper overflow-hidden" id="home">
      <div className="relative max-w-6xl mx-auto px-0 md:px-6 lg:px-8 pt-0 pb-8 sm:pb-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 lg:gap-12 items-center">
          {/* Top on Mobile (order-1), Right on Desktop (order-2): Full-width Blended Portrait */}
          <div
            className={`header-portrait-enter order-1 md:order-2 md:col-span-5 w-full flex justify-center md:justify-end items-center transition-opacity duration-350 ease-out ${portraitEntered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="relative w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
              <img
                src="/images/portrait/my-photo.jpg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = portraitPlaceholder;
                }}
                alt="John Emil, portrait"
                className="w-full h-full portrait-blend pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Below photo on Mobile (order-2), Left on Desktop (order-1): Name, Role, Summary */}
          <div className="order-2 md:order-1 md:col-span-7 flex flex-col justify-center px-4 sm:px-6 md:px-0 pt-3 sm:pt-6 md:pt-0 space-y-3 sm:space-y-4 md:space-y-5">
            {/* Name and role block */}
            <div
              className={`header-name-enter space-y-1.5 sm:space-y-2 md:space-y-3 transition-all duration-350 ease-out ${nameEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              {/* H1 Name: Unbounded 600/700, clamp ~56px to ~150px, line-height 0.92, letter-spacing -0.02em */}
              <h1
                className="font-unbounded font-semibold leading-[0.92] tracking-[-0.02em] text-ink select-none"
                style={{ fontSize: 'clamp(3.2rem, 9vw, 9.375rem)' }}
              >
                <span className="block">John</span>
                <span className="block">Emil</span>
              </h1>

              {/* Role line directly under name, JetBrains Mono, sentence case */}
              <p className="font-mono text-xs sm:text-sm text-ink-muted font-normal tracking-tight">
                Software Engineer | Backend-Focused Full Stack Developer | Graphic Designer
              </p>
            </div>

            {/* Short summary under the role, Inter 400, max 2–3 lines */}
            <p
              className={`header-summary-enter font-sans text-xs sm:text-sm md:text-base text-ink font-normal leading-relaxed max-w-xl transition-opacity duration-350 ease-out ${summaryEntered ? 'opacity-100' : 'opacity-0'
                }`}
            >
              Backend-focused Full Stack Developer (Java, Spring Boot, React.js, Oracle) who builds and ships real products, including a live multi-tenant SaaS platform serving 35+ stores and an ERP system for a printing business. Experienced in integrating LLM-powered features (Gemini chatbot and booking agent) into backend systems. Looking to join an engineering team to build scalable backend systems and grow as a software engineer.
            </p>

            {/* Action Row: Download CV & Social Links (LinkedIn, GitHub) */}
            <div
              className={`header-summary-enter flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3 transition-opacity duration-350 ease-out ${summaryEntered ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* Download CV Button */}
              <a
                href={CV_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-lime text-black font-mono text-xs sm:text-sm font-medium hover:bg-lime/90 transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shrink-0"
              >
                <HiOutlineDocumentArrowDown className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-full border border-ink-border bg-paper-card text-ink hover:text-black dark:hover:text-white hover:bg-paper-surface hover:border-ink transition-all text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <FaLinkedin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Link */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-full border border-ink-border bg-paper-card text-ink hover:text-black dark:hover:text-white hover:bg-paper-surface hover:border-ink transition-all text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;

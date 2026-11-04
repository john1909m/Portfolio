import { useState, useEffect, useMemo, lazy, Suspense, memo, useCallback, useRef } from 'react';
import {
  HiOutlineHome,
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
} from 'react-icons/hi2';
import ThemeToggle from './components/ThemeToggle';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

const Header = lazy(() => import('./components/header'));
const TechMarquee = lazy(() => import('./components/TechMarquee'));
const SectionSwitcher = lazy(() => import('./components/SectionSwitcher'));
const SoftwareSection = lazy(() => import('./components/SoftwareSection'));
const GraphicSection = lazy(() => import('./components/GraphicSection'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="py-16 flex items-center justify-center text-xs font-mono text-ink-muted">
    Loading content...
  </div>
);

const NavButton = memo(({ tab, isActive, onClick }) => {
  const Icon = tab.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full py-1.5 px-0.5 rounded-xl text-[10px] font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shrink-0 ${
        isActive
          ? 'bg-ink text-paper font-medium shadow-sm'
          : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
      }`}
      aria-label={tab.label}
    >
      <Icon className="w-4 h-4 shrink-0 mb-0.5" aria-hidden="true" />
      <span className="truncate leading-none">{tab.label}</span>
    </button>
  );
});

NavButton.displayName = 'NavButton';

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'graphic') return 'graphic';
    }
    return 'software';
  });

  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle' | 'exiting' | 'entering'
  const [slideDirection, setSlideDirection] = useState('to-left'); // 'to-left' | 'to-right'
  const [displayedSection, setDisplayedSection] = useState(activeSection);
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [activeScrollSection, setActiveScrollSection] = useState('home');

  const sectionContainerRef = useRef(null);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['home', 'work-section', 'about', 'experience', 'education', 'certifications', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            const mapped = sectionIds[i] === 'work-section' ? 'work' : sectionIds[i];
            setActiveScrollSection(mapped);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionSwitch = useCallback((targetSection) => {
    if (targetSection === activeSection) return;

    const direction = targetSection === 'graphic' ? 'to-left' : 'to-right';
    setSlideDirection(direction);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setActiveSection(targetSection);
      setDisplayedSection(targetSection);
      window.location.hash = `#${targetSection}`;
      sectionContainerRef.current?.focus?.();
      return;
    }

    // Directional transition: 250ms exit + 300ms enter = 550ms total
    setTransitionPhase('exiting');

    setTimeout(() => {
      setActiveSection(targetSection);
      setDisplayedSection(targetSection);
      window.location.hash = `#${targetSection}`;
      setTransitionPhase('entering');

      // Allow DOM to paint initial enter frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionPhase('idle');
          sectionContainerRef.current?.focus?.();
        });
      });
    }, 250);
  }, [activeSection]);

  // Sync with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'graphic' && activeSection !== 'graphic') {
        handleSectionSwitch('graphic');
      } else if (hash === 'software' && activeSection !== 'software') {
        handleSectionSwitch('software');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [activeSection, handleSectionSwitch]);

  const scrollToAnchor = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }, []);

  const navTabs = useMemo(() => [
    { id: 'home', icon: HiOutlineHome, label: 'Home' },
    { id: 'work', icon: activeSection === 'software' ? HiOutlineCodeBracket : HiOutlinePaintBrush, label: activeSection === 'software' ? 'Software' : 'Graphic' },
    { id: 'about', icon: HiOutlineUser, label: 'Bio' },
    { id: 'experience', icon: HiOutlineBriefcase, label: 'Experience' },
    { id: 'contact', icon: HiOutlineEnvelope, label: 'Contact' },
  ], [activeSection]);

  // Transition style classes based on phase and direction
  const getTransitionClasses = () => {
    if (transitionPhase === 'exiting') {
      return slideDirection === 'to-left'
        ? '-translate-x-10 opacity-0 transition-all duration-250 ease-out'
        : 'translate-x-10 opacity-0 transition-all duration-250 ease-out';
    }
    if (transitionPhase === 'entering') {
      return slideDirection === 'to-left'
        ? 'translate-x-10 opacity-0'
        : '-translate-x-10 opacity-0';
    }
    return 'translate-x-0 opacity-100 transition-all duration-300 ease-out';
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-paper text-ink font-sans selection:bg-lime selection:text-black">
        {/* Sticky top utility bar */}
        <nav
          className="sticky top-0 z-30 w-full border-b border-ink-border bg-paper/95 backdrop-blur-md px-4 sm:px-6 py-2.5 transition-colors"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToAnchor('home')}
              className="font-display text-base sm:text-lg text-ink font-semibold hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
            >
              John Emil <span className="font-mono text-xs text-ink-muted">/ Portfolio</span>
            </button>

            {/* Desktop jump links */}
            <div className="hidden md:flex items-center gap-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => scrollToAnchor('home')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'home'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('work-section')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'work'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Work ({activeSection === 'software' ? 'Software' : 'Graphic'})
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('about')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'about'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Bio
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('experience')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'experience'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('education')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'education'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('certifications')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'certifications'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Certifications
              </button>
              <button
                type="button"
                onClick={() => scrollToAnchor('contact')}
                className={`px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                  activeScrollSection === 'contact'
                    ? 'bg-ink text-paper font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-surface'
                }`}
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main single page content */}
        <main className="pb-24 md:pb-0">
          {/* Top Header: Two-column grid, Name, Role, Summary, Blended Portrait (no switch) */}
          <Suspense fallback={<LoadingFallback />}>
            <Header onLoaded={() => setHeaderLoaded(true)} />
          </Suspense>

          {/* Tech Marquee directly under the header */}
          <Suspense fallback={<div className="h-12 bg-paper border-b border-ink-border" />}>
            <TechMarquee isHeaderLoaded={headerLoaded} />
          </Suspense>

          {/* Work / Portfolio Section */}
          <div id="work-section" className="border-b border-ink-border bg-paper">
            {/* Segmented Switch as the first element inside the Portfolio section, above the filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-ink-border">
                <div>
                  <p className="text-xs font-mono text-ink-muted">
                    Portfolio &middot; Specialization
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-display text-ink font-semibold tracking-tight mt-0.5">
                    Selected work
                  </h2>
                </div>

                <Suspense fallback={<div className="h-10 w-64 bg-paper-surface rounded-full animate-pulse" />}>
                  <SectionSwitcher
                    activeSection={activeSection}
                    onSwitch={handleSectionSwitch}
                  />
                </Suspense>
              </div>
            </div>

            {/* Switchable section container with directional slide transition */}
            <div
              ref={sectionContainerRef}
              tabIndex={-1}
              className={`overflow-hidden focus:outline-none ${getTransitionClasses()}`}
            >
              {displayedSection === 'software' ? (
                <Suspense fallback={<LoadingFallback />}>
                  <SoftwareSection />
                </Suspense>
              ) : (
                <Suspense fallback={<LoadingFallback />}>
                  <GraphicSection />
                </Suspense>
              )}
            </div>
          </div>

          {/* Shared Bottom Area: Compact Bio + 3 Separate Timeline Blocks */}
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>

          {/* Three separate blocks as specified */}
          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Education />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </main>

        {/* Mobile floating quick jump nav: Icons on top, text labels below */}
        <aside
          className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 md:hidden w-[94vw] max-w-[360px] p-1.5 rounded-2xl border border-ink-border bg-paper/95 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/50"
          aria-label="Mobile quick navigation"
        >
          <div className="grid grid-cols-5 gap-0.5 w-full items-center justify-items-stretch">
            {navTabs.map((tab) => (
              <NavButton
                key={tab.id}
                tab={tab}
                isActive={activeScrollSection === tab.id}
                onClick={() => {
                  if (tab.id === 'work') scrollToAnchor('work-section');
                  else scrollToAnchor(tab.id);
                }}
              />
            ))}
          </div>
        </aside>
      </div>
    </ErrorBoundary>
  );
}

export default App;

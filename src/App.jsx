import { useState, useEffect, lazy, Suspense, memo } from 'react';
import './App.css';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import ThemeToggle from './assets/components/ThemeToggle';
import BackgroundParticles from './assets/components/BackgroundParticles';
import WelcomeScreen from './assets/components/WelcomeScreen';
import { Contact } from './assets/components/Contact';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

const Header = lazy(() => import('./assets/components/header'));
const About = lazy(() => import('./assets/components/About'));
const Portfolio = lazy(() => import('./assets/components/Potfolio').then((m) => ({ default: m.Portfolio })));
const Education = lazy(() => import('./assets/components/Education').then((m) => ({ default: m.Education })));
const Skills = lazy(() => import('./assets/components/Skills').then((m) => ({ default: m.Skills })));
const Footer = lazy(() => import('./assets/components/Footer'));

const LoadingFallback = () => <div className="min-h-screen" />;

const NavButton = memo(({ tab, activeTab, onClick }) => (
  <button
    type="button"
    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
    onClick={onClick}
  >
    <div className="nav-bubble">
      <div className="nav-icon">{tab.icon}</div>
      <span className="nav-label">{tab.label}</span>
    </div>
  </button>
));

NavButton.displayName = 'NavButton';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const tabs = [
    { id: 'home', icon: <FaHome size="20" />, label: 'Home', link: '#home' },
    { id: 'about', icon: <FaUser size="20" />, label: 'About', link: '#about' },
    { id: 'skills', icon: <GiSkills size="20" />, label: 'Skills', link: '#skills' },
    { id: 'portfolio', icon: <FaBriefcase size="20" />, label: 'Portfolio', link: '#portfolio' },
    { id: 'education', icon: <FaGraduationCap size="20" />, label: 'Education', link: '#education' },
    { id: 'contact', icon: <FaEnvelope size="20" />, label: 'Contact', link: '#contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;
      isScrolling = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (isMobile) {
          if (scrollY < viewportHeight) setActiveTab('home');
          else if (scrollY < 1.8 * viewportHeight) setActiveTab('about');
          else if (scrollY < 3 * viewportHeight) setActiveTab('skills');
          else if (scrollY < 7.1 * viewportHeight) setActiveTab('portfolio');
          else if (scrollY < 8 * viewportHeight) setActiveTab('education');
          else setActiveTab('contact');
        } else {
          if (scrollY < viewportHeight) setActiveTab('home');
          else if (scrollY < 1.6 * viewportHeight) setActiveTab('about');
          else if (scrollY < 2.2 * viewportHeight) setActiveTab('skills');
          else if (scrollY < 3.2 * viewportHeight) setActiveTab('portfolio');
          else if (scrollY < 4.2 * viewportHeight) setActiveTab('education');
          else setActiveTab('contact');
        }

        isScrolling = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, showContent]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        {showWelcome && (
          <WelcomeScreen
            onComplete={() => {
              setShowWelcome(false);
              setShowContent(true);
            }}
          />
        )}
        {showContent && (
          <>
            <BackgroundParticles />
            <ThemeToggle />

            <main>
              <Suspense fallback={<LoadingFallback />}>
                <Header />
              </Suspense>

              <div id="about">
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div id="skills">
                <Suspense fallback={<LoadingFallback />}>
                  <Skills />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div id="portfolio">
                <Suspense fallback={<LoadingFallback />}>
                  <Portfolio />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div id="education">
                <Suspense fallback={<LoadingFallback />}>
                  <Education />
                </Suspense>
              </div>
              <div className="h-[7vh]" />

              <div id="contact">
                <Suspense fallback={<LoadingFallback />}>
                  <Contact />
                </Suspense>
              </div>
              <div className="h-[10vh]" />

              <Suspense fallback={<div />}>
                <Footer />
              </Suspense>
            </main>

            <div className="navbar-wrapper">
              <nav className="mobile-navbar" aria-label="Section navigation">
                {tabs.map((tab) => (
                  <NavButton
                    key={tab.id}
                    tab={tab}
                    activeTab={activeTab}
                    onClick={() => {
                      setActiveTab(tab.id);
                      scrollToSection(tab.id);
                    }}
                  />
                ))}
              </nav>
            </div>
          </>
        )}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

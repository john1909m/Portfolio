import { useState, useEffect, lazy, Suspense, memo, useCallback, useRef } from 'react';
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
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  
  const sectionsRef = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    portfolio: portfolioRef,
    education: educationRef,
    contact: contactRef,
  };

  const tabs = [
    { id: 'home', icon: <FaHome size="20" />, label: 'Home', ref: homeRef },
    { id: 'about', icon: <FaUser size="20" />, label: 'About', ref: aboutRef },
    { id: 'skills', icon: <GiSkills size="20" />, label: 'Skills', ref: skillsRef },
    { id: 'portfolio', icon: <FaBriefcase size="20" />, label: 'Portfolio', ref: portfolioRef },
    { id: 'education', icon: <FaGraduationCap size="20" />, label: 'Education', ref: educationRef },
    { id: 'contact', icon: <FaEnvelope size="20" />, label: 'Contact', ref: contactRef },
  ];

  const scrollToSection = useCallback((id) => {
    const section = sectionsRef[id]?.current;
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = section.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveTab(id);
    }
  }, [sectionsRef]);

  // Handle scroll detection
  useEffect(() => {
    if (!showContent) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Get all sections positions
      const sections = tabs.map(tab => ({
        id: tab.id,
        element: sectionsRef[tab.id]?.current,
        offset: sectionsRef[tab.id]?.current?.offsetTop - headerHeight
      })).filter(s => s.element);
      
      // Find active section
      let activeSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollY >= section.offset - 100) {
          activeSection = section.id;
          break;
        }
      }
      
      // If at very top
      if (scrollY < 100) {
        activeSection = 'home';
      }
      
      if (activeSection !== activeTab) {
        setActiveTab(activeSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => setTimeout(handleScroll, 100));
    
    // Initial call
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [showContent, activeTab, sectionsRef, tabs]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            {/* <ThemeToggle /> */}

            <main>
              <div ref={homeRef} id="home">
                <Suspense fallback={<LoadingFallback />}>
                  <Header />
                </Suspense>
              </div>

              <div ref={aboutRef} id="about">
                <Suspense fallback={<LoadingFallback />}>
                  <About />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div ref={skillsRef} id="skills">
                <Suspense fallback={<LoadingFallback />}>
                  <Skills />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div ref={portfolioRef} id="portfolio">
                <Suspense fallback={<LoadingFallback />}>
                  <Portfolio />
                </Suspense>
              </div>
              <div className="h-[5vh]" />

              <div ref={educationRef} id="education">
                <Suspense fallback={<LoadingFallback />}>
                  <Education />
                </Suspense>
              </div>
              <div className="h-[7vh]" />

              <div ref={contactRef} id="contact">
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
              <nav className="mobile-navbar">
                {tabs.map((tab) => (
                  <NavButton
                    key={tab.id}
                    tab={tab}
                    activeTab={activeTab}
                    onClick={() => scrollToSection(tab.id)}
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
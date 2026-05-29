import { memo, useContext, useEffect, useState } from 'react';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineDocumentArrowDown,
  HiOutlineArrowDown,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import { FaLaptopCode } from 'react-icons/fa';
import { ThemeContext } from '../../../ThemeContext';
import './Header.scss';

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/john1909m', icon: '/images/github-142-svgrepo-com (1).svg' },
  { name: 'Behance', url: 'https://www.behance.net/JohnEmil21', icon: '/images/behance-round-svgrepo-com.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/john-emil-0134a3239/', icon: '/images/linkedin-round-svgrepo-com.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/_john_emil_', icon: '/images/instagram-f-svgrepo-com.svg' },
];

const ROLES = ['Software Engineer', 'Full-Stack Developer', 'Graphic Designer'];

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`hero-wow ${isDarkMode ? 'hero-wow--dark' : 'hero-wow--light'} ${mounted ? 'hero-wow--visible' : ''}`}
      aria-labelledby="hero-name"
    >
      <div className="hero-wow__cover" aria-hidden="true">
        <img
          src="/images/ai_me_b.jpg"
          alt=""
          className="hero-wow__cover-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-wow__cover-shade" />
        <div className="hero-wow__mesh" />
        <div className="hero-wow__glow hero-wow__glow--1" />
        <div className="hero-wow__glow hero-wow__glow--2" />
      </div>

      <div className="hero-wow__body">
        <div className={`hero-wow__card ${isDarkMode ? 'hero-wow__card--dark' : 'hero-wow__card--light'}`}>
          <div className="hero-wow__card-shine" aria-hidden="true" />

          <div className="hero-wow__layout">
            <div className="hero-wow__visual">
              <div className="hero-wow__frame">
                <img
                  className="hero-wow__photo"
                  src="/images/IMG_7859ddrr.webp"
                  alt="John Emil — Software Engineer"
                  width={280}
                  height={280}
                  loading="eager"
                />
              </div>
              <div className="hero-wow__orbit" aria-hidden="true">
                <span className="hero-wow__orbit-dot" />
                <span className="hero-wow__orbit-dot" />
                <span className="hero-wow__orbit-dot" />
              </div>
            </div>

            <div className="hero-wow__copy">
              <div className="hero-wow__badge">
                <HiOutlineSparkles aria-hidden="true" />
                <span>Open to opportunities</span>
                <span className="hero-wow__pulse" aria-hidden="true" />
              </div>

              <p className="hero-wow__greeting" >
                <FaLaptopCode aria-hidden="true" />
                Hello, I&apos;m
              </p>

              <h1 id="hero-name" className="hero-wow__name">
                John <span className="hero-wow__name-accent">Emil</span>
              </h1>

              <p className="hero-wow__headline">
                I craft <strong>scalable web apps</strong> and <strong>stunning visuals</strong> that leave a lasting impression.
              </p>

              <div className="hero-wow__roles" aria-label="Professional roles">
                {ROLES.map((role) => (
                  <span key={role} className="hero-wow__role-pill">
                    {role}
                  </span>
                ))}
              </div>

              <ul className="hero-wow__contact">
                <li>
                  <HiOutlineEnvelope aria-hidden="true" />
                  <a href="mailto:johnemil21@yahoo.com">johnemil21@yahoo.com</a>
                </li>
                <li>
                  <HiOutlinePhone aria-hidden="true" />
                  <a href="tel:+201200158852">+20 120 015 8852</a>
                </li>
                <li>
                  <HiOutlineMapPin aria-hidden="true" />
                  <span>Giza, Egypt</span>
                </li>
              </ul>

              <div className="hero-wow__actions">
                <a
                  href="https://drive.google.com/file/d/1iCsb2bDT1sugEcGrZJs6CG7ZGYu8_D0a/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-wow__btn hero-wow__btn--primary"
                >
                  <HiOutlineDocumentArrowDown aria-hidden="true" />
                  Download CV
                </a>
                <button type="button" className="hero-wow__btn hero-wow__btn--ghost" onClick={scrollToAbout}>
                  View my work
                </button>
              </div>

              <nav className="hero-wow__social" aria-label="Social profiles">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-wow__social-link"
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt="" width={22} height={22} loading="lazy" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-wow__scroll"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <HiOutlineArrowDown aria-hidden="true" />
      </button>
    </section>
  );
};

export default memo(Header);

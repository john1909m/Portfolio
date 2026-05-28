import { memo, useState, useCallback, useEffect, useRef, useContext } from 'react';
import {
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlinePaintBrush,
  HiOutlineFilm,
  HiOutlineBolt,
  HiOutlineSparkles,
  HiOutlineCpuChip,
} from 'react-icons/hi2';
import { ThemeContext } from '../../../ThemeContext';
import './Skills.scss';

const CATEGORY_RING = {
  frontend: 'linear-gradient(135deg, #4f46e5, #818cf8)',
  tools: 'linear-gradient(135deg, #0891b2, #67e8f9)',
  design: 'linear-gradient(135deg, #0d9488, #5eead4)',
  video: 'linear-gradient(135deg, #059669, #6ee7b7)',
  ai: 'linear-gradient(135deg, #a855f7, #ec4899, #f472b6)',
};

const SkillChip = memo(({ skill, ringGradient, index }) => (
  <li
    className="skills-wow__chip"
    style={{ '--chip-delay': `${index * 0.04}s` }}
  >
    <div className="skills-wow__circle" style={{ background: ringGradient }}>
      <span className="skills-wow__circle-inner">
        <img src={skill.icon} alt="" width={32} height={32} loading="lazy" />
      </span>
    </div>
    <span className="skills-wow__chip-name">{skill.name}</span>
  </li>
));

SkillChip.displayName = 'SkillChip';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Web',
    fullTitle: 'Web Development',
    icon: HiOutlineCodeBracket,
    skills: [
      { name: 'React.js', icon: '/images/react-svgrepo-com.svg' },
      { name: 'JavaScript', icon: '/images/javascript-svgrepo-com.svg' },
      { name: 'Spring Boot', icon: '/images/spring-boot-svgrepo-com.svg' },
      { name: 'HTML/CSS', icon: '/images/html-5-svgrepo-com.svg' },
      { name: 'Tailwind', icon: '/images/tailwind-svgrepo-com.svg' },
      { name: 'Java', icon: '/images/java-svgrepo-com.svg' },
      { name: 'OracleDB', icon: '/images/database-svgrepo-com.svg' },
      { name: 'Vite', icon: '/images/vite-svgrepo-com.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    fullTitle: 'Dev Tools',
    icon: HiOutlineComputerDesktop,
    skills: [
      { name: 'Git/GitHub', icon: '/images/github-142-svgrepo-com (1).svg' },
      { name: 'Responsive', icon: '/images/responsive-design-svgrepo-com.svg' },
      { name: 'Postman', icon: '/images/postman-icon-svgrepo-com.svg' },
      { name: 'Swagger', icon: '/images/swagger-svgrepo-com.svg' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    fullTitle: 'Design',
    icon: HiOutlinePaintBrush,
    skills: [
      { name: 'Photoshop', icon: '/images/photoshop-cc-logo-svgrepo-com.svg' },
      { name: 'Illustrator', icon: '/images/adobe-illustrator-svgrepo-com.svg' },
    ],
  },
  {
    id: 'video',
    title: 'Video',
    fullTitle: 'Video Editing',
    icon: HiOutlineFilm,
    skills: [
      { name: 'Premiere', icon: '/images/adobe-premiere-svgrepo-com.svg' },
      { name: 'After Effects', icon: '/images/after-effects-cc-logo-svgrepo-com.svg' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    fullTitle: 'AI Tools',
    icon: HiOutlineCpuChip,
    skills: [
      { name: 'Cursor', icon: '/images/cursor.png' },
      { name: 'Claude Code', icon: '/images/claude.png' },
      { name: 'Antigravity', icon: '/images/Antigravity.png' },
      { name: 'ChatGPT', icon: '/images/chatgpt.jpg' },
    ],
  },
];

export const Skills = memo(() => {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [visible, setVisible] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  const sectionRef = useRef(null);

  const handleCategoryChange = useCallback((id) => {
    setActiveCategory(id);
    setPanelKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const current = skillCategories.find((c) => c.id === activeCategory);
  const ring = CATEGORY_RING[activeCategory];
  const PanelIcon = current?.icon;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`skills-wow ${isDarkMode ? 'skills-wow--dark' : 'skills-wow--light'} ${visible ? 'skills-wow--visible' : ''}`}
      aria-labelledby="skills-heading"
    >
      <div className="skills-wow__bg" aria-hidden="true">
        <div className="skills-wow__shade" />
        <div className="skills-wow__mesh" />
        <div className="skills-wow__glow skills-wow__glow--1" />
        <div className="skills-wow__glow skills-wow__glow--2" />
      </div>

      <div className="skills-wow__inner">
        <header className="skills-wow__header">
          <div className="skills-wow__badge">
            <HiOutlineBolt aria-hidden="true" />
            <span>Technical expertise</span>
            <span className="skills-wow__pulse" aria-hidden="true" />
          </div>
          <h2 id="skills-heading" className="skills-wow__title">
            Professional <span className="skills-wow__title-accent">Skills</span>
          </h2>
          <p className="skills-wow__subtitle">
            Technologies and tools I work with every day.
          </p>
        </header>

        <div className="skills-wow__tabs-wrap">
          <div className="skills-wow__tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map(({ id, title, fullTitle, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeCategory === id}
                className={`skills-wow__tab ${activeCategory === id ? 'skills-wow__tab--active' : ''}`}
                onClick={() => handleCategoryChange(id)}
              >
                <Icon aria-hidden="true" />
                <span className="skills-wow__tab-label">{title}</span>
                <span className="skills-wow__tab-label-full">{fullTitle}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          key={panelKey}
          className={`skills-wow__card ${isDarkMode ? 'skills-wow__card--dark' : 'skills-wow__card--light'}`}
          role="tabpanel"
          aria-label={current?.fullTitle}
        >
          <div className="skills-wow__card-shine" aria-hidden="true" />

          <div className="skills-wow__card-head">
            <div className="skills-wow__card-title">
              {PanelIcon && <PanelIcon aria-hidden="true" />}
              <h3>{current?.fullTitle}</h3>
            </div>
            <span className="skills-wow__stat-pill">
              <HiOutlineSparkles aria-hidden="true" />
              {current?.skills.length} tools
            </span>
          </div>

          <ul className="skills-wow__grid" aria-label={`${current?.fullTitle} skills`}>
            {current?.skills.map((skill, index) => (
              <SkillChip key={skill.name} skill={skill} ringGradient={ring} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

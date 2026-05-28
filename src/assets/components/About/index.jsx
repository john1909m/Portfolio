import { memo, useEffect, useRef, useState } from 'react';
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineCalendar,
  HiOutlineLanguage,
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineCpuChip,
  HiOutlineBookOpen,
  HiOutlineFlag,
  HiOutlineSparkles,
  HiOutlineLightBulb,
} from 'react-icons/hi2';
import { SectionHeader } from '../../../components/shared/SectionHeader';
import './About.scss';

const StatCounter = memo(({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <article ref={ref} className="about-stat card">
      <span className="about-stat__icon" aria-hidden="true">{icon}</span>
      <span className="about-stat__value">{count}+</span>
      <span className="about-stat__label">{label}</span>
    </article>
  );
});

StatCounter.displayName = 'StatCounter';

const STATS = [
  { target: 10, label: 'Projects Completed', icon: <HiOutlineRocketLaunch /> },
  { target: 2, label: 'Years Experience', icon: <HiOutlineClock /> },
  { target: 15, label: 'Technologies', icon: <HiOutlineCpuChip /> },
];

const About = memo(() => {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-heading">
      <div className="section-orb" aria-hidden="true" />
      <div className="section-container">
        <SectionHeader
          id="about-heading"
          badge="Get to know me"
          badgeIcon={<HiOutlineSparkles />}
          title="About"
          titleAccent="Me"
        />

        <div className="about__grid">
          <aside className="about__sidebar card">
            <div className="about__avatar" aria-hidden="true">
              <HiOutlineCpuChip />
            </div>
            <h3 className="about__name">John Emil</h3>
            <p className="about__role">Full-Stack Developer &amp; Designer</p>

            <ul className="about__info">
              <li>
                <HiOutlineMapPin aria-hidden="true" />
                <div>
                  <strong>Location</strong>
                  <span>Giza, Egypt</span>
                </div>
              </li>
              <li>
                <HiOutlineEnvelope aria-hidden="true" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:johnemil21@yahoo.com">johnemil21@yahoo.com</a>
                </div>
              </li>
              
              <li>
                <HiOutlineLanguage aria-hidden="true" />
                <div>
                  <strong>Languages</strong>
                  <span>English, Arabic</span>
                </div>
              </li>
            </ul>

            <div className="about__stats" role="list" aria-label="Career statistics">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </aside>

          <div className="about__main">
            <div className="about__tabs" role="tablist" aria-label="About content">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'bio'}
                className={`about__tab ${activeTab === 'bio' ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab('bio')}
              >
                <HiOutlineBookOpen aria-hidden="true" /> Bio
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'vision'}
                className={`about__tab ${activeTab === 'vision' ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                <HiOutlineFlag aria-hidden="true" /> Vision
              </button>
            </div>

            {activeTab === 'bio' && (
              <article className="about__panel card" role="tabpanel">
                <p>
                  I am a <strong className="gradient-text">Full Stack Developer</strong> specializing in Java Spring Boot and React.js,
                  with a background in graphic and motion design.
                </p>
                <div className="about__highlight">
                  <HiOutlineSparkles aria-hidden="true" />
                  <p>
                    I build <strong>scalable web applications</strong> end to end and craft clean, engaging user interfaces.
                  </p>
                </div>
                <p>
                  My work combines <strong>solid engineering</strong> with <strong>creative design</strong> for experiences that are functional and polished.
                </p>
                <div className="about__highlight">
                  <HiOutlineLightBulb aria-hidden="true" />
                  <p>
                    I focus on maintainable code and intuitive UIs that feel smooth and purposeful.
                  </p>
                </div>
                <blockquote className="about__quote">
                  I am always learning and exploring ways to blend design and development into impactful digital products.
                </blockquote>
              </article>
            )}

            {activeTab === 'vision' && (
              <div className="about__vision" role="tabpanel">
                <article className="card about__vision-card">
                  <HiOutlineRocketLaunch className="about__vision-icon" aria-hidden="true" />
                  <h4>My Mission</h4>
                  <p>
                    Create digital experiences that blend functionality with thoughtful design, making technology more accessible.
                  </p>
                </article>
                <article className="card about__vision-card">
                  <HiOutlineSparkles className="about__vision-icon" aria-hidden="true" />
                  <h4>My Values</h4>
                  <ul>
                    <li>Clean, maintainable code</li>
                    <li>Creative problem solving</li>
                    <li>Collaboration and communication</li>
                    <li>Continuous learning</li>
                  </ul>
                </article>
                <article className="card about__vision-card">
                  <HiOutlineFlag className="about__vision-icon" aria-hidden="true" />
                  <h4>Goals</h4>
                  <ul>
                    <li>Master AI integration in web apps</li>
                    <li>Contribute to open source</li>
                    <li>Build a React Native mobile app</li>
                    <li>Share knowledge through writing</li>
                  </ul>
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;

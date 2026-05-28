import React, { useContext, useState, useEffect, useRef, memo } from 'react'
import './Achievements.scss'
import { ThemeContext } from '../../../ThemeContext'
import { FaTrophy, FaAward, FaGraduationCap, FaStar, FaFire, FaRocket, FaCheckCircle } from 'react-icons/fa'

// Counter Animation Component
const CounterValue = memo(({ value, isVisible }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    let start = 0
    const duration = 2000
    const step = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  return <span className="counter-value">{count}</span>
})

CounterValue.displayName = 'CounterValue'

// Achievement Card Component
const AchievementCard = memo(({ icon, title, description, metric, isDarkMode, delay }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div
      ref={cardRef}
      className={`achievement-card ${isDarkMode ? 'dark' : 'light'} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`card-icon ${isDarkMode ? 'dark' : 'light'}`}>
        {icon}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {metric && (
          <div className="card-metric">
            <CounterValue value={parseInt(metric)} isVisible={isVisible} />
            <span className="metric-label">+</span>
          </div>
        )}
      </div>
      <div className="card-glow"></div>
    </div>
  )
})

AchievementCard.displayName = 'AchievementCard'

// Timeline Item Component
const TimelineItem = memo(({ year, title, description, isVisible, delay, isDarkMode }) => (
  <div
    className={`timeline-item ${isVisible ? 'visible' : ''}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className={`timeline-dot ${isDarkMode ? 'dark' : 'light'}`}></div>
    <div className={`timeline-content ${isDarkMode ? 'dark' : 'light'}`}>
      <span className="timeline-year">{year}</span>
      <h4 className="timeline-title">{title}</h4>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
))

TimelineItem.displayName = 'TimelineItem'

// Main Achievements Component
const Achievements = memo(() => {
  const { isDarkMode } = useContext(ThemeContext)
  const [isTimelineVisible, setIsTimelineVisible] = useState(false)
  const timelineRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  const achievements = [
    {
      icon: <FaRocket />,
      title: 'Projects Completed',
      description: 'Successfully delivered multiple projects',
      metric: '25',
      delay: 0
    },
    {
      icon: <FaAward />,
      title: 'Skills Mastered',
      description: 'Expertise in various technologies',
      metric: '15',
      delay: 0.1
    },
    {
      icon: <FaStar />,
      title: 'Client Satisfaction',
      description: 'Rating based on project feedback',
      metric: '98',
      delay: 0.2
    },
    {
      icon: <FaFire />,
      title: 'Years of Experience',
      description: 'Building digital solutions',
      metric: '3',
      delay: 0.3
    }
  ]
  
  const milestones = [
    {
      year: '2021',
      title: 'Started Development Journey',
      description: 'Began learning web development and design'
    },
    {
      year: '2022',
      title: 'First Professional Projects',
      description: 'Completed first commercial projects and gained real-world experience'
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      description: 'Became proficient in full-stack development with React and Java'
    },
    {
      year: '2024',
      title: 'Design Integration',
      description: 'Combined design expertise with development for better UX'
    },
    {
      year: '2025',
      title: 'Current - Continuous Growth',
      description: 'Exploring AI, advanced frameworks, and new technologies'
    }
  ]
  
  const certifications = [
    { title: 'Responsive Web Design', issuer: 'FreeCodeCamp' },
    { title: 'React Fundamentals', issuer: 'Udemy' },
    { title: 'Java Spring Boot', issuer: 'Udemy' },
    { title: 'UI/UX Design Principles', issuer: 'Coursera' }
  ]
  
  return (
    <section className={`achievements-section ${isDarkMode ? 'dark' : 'light'}`} id="achievements">
      {/* Animated Background */}
      <div className="achievements-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="achievements-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">🏆</span>
            <span>My Achievements</span>
          </div>
          <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
            Milestones & <span className="gradient-text">Accomplishments</span>
          </h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>
        </div>
        
        {/* Achievement Stats */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        
        {/* Timeline Section */}
        <div className="timeline-section" ref={timelineRef}>
          <h3 className="timeline-title-main">Journey Timeline</h3>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                {...milestone}
                isVisible={isTimelineVisible}
                delay={index * 0.1}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className={`section-subtitle ${isDarkMode ? 'dark' : 'light'}`}>Certifications & Courses</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`certification-card ${isDarkMode ? 'dark' : 'light'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-icon">
                  <FaCheckCircle />
                </div>
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Achievements.displayName = 'Achievements'
export default Achievements

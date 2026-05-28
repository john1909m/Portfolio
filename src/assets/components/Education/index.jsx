import React, { useContext } from 'react'
import "./Education.scss"
import { ThemeContext } from '../../../ThemeContext'
import { FaGraduationCap, FaCode, FaPaintBrush } from 'react-icons/fa'

export const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor in Engineering',
      institution: 'Modern Academy for Engineering & technology',
      duration: 'Expected Graduation year 2028',
      description: ''
    },
    {
      icon: <FaCode />,
      title: 'Front-End Development',
      institution: 'MEC Academy',
      duration: '',
      description: 'Experienced in front-end development with hands-on training in HTML, CSS, Javascript and UI design through structured course projects.'
    },
    {
      icon: <FaCode />,
      title: 'Back-End Development',
      institution: 'Eraasoft Academy',
      duration: '',
      description: 'Experienced in back-end development with hands-on training in Java, Spring Boot, and database management through structured course projects.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Graphic design diploma',
      institution: 'Arcplan Group',
      duration: '',
      description: 'I gained hands-on experience with design principles, tools, and software. Throughout the course, I successfully performed a variety of design tasks, including logo creation, branding, poster design, and digital illustrations.'
    }
  ];

  return (
    <section className={`education-section ${isDarkMode ? 'dark' : 'light'}`} id="education">
      {/* Animated Background */}
      <div className="education-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>

      <div className="education-container">
        <div className="education-grid">
          {/* Header left */}
          <div className="education-header-col">
            <div className="header-badge">
              <span className="badge-icon">🎓</span>
              <span>My Journey</span>
            </div>
            <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
              Academic <span className="gradient-text">Education</span>
            </h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-diamond">◆</span>
              <span className="divider-line"></span>
            </div>
            <p className="education-subtitle">My academic background and professional certifications</p>
          </div>
          
          {/* Timeline right */}
          <div className="education-timeline-col">
            <div className="education-timeline">
              {educationData.map((item, index) => (
                <div key={index} className="education-card-wrapper">
                  <div className="timeline-node">
                    {item.icon}
                  </div>
                  
                  <div className={`education-card-box ${isDarkMode ? 'dark' : 'light'}`}>
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="card-institution">{item.institution}</h4>
                    {item.duration && <span className="card-duration">{item.duration}</span>}
                    {item.description && <p className="card-description">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

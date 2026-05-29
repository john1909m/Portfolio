import React, { useContext } from 'react'
import "./Experience.scss"
import { ThemeContext } from '../../../ThemeContext'
import { FaGraduationCap, FaCode, FaPaintBrush } from 'react-icons/fa'

export const Experience = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const experienceData = [
    {
      icon: <FaCode />,
      title: 'Full Stack Developer & Founder',
      institution: 'Storely',
      duration: 'Feb 2026 - present',
      description: 'Built and developed a multi-tenant SaaS e-commerce platform supporting more than 10 online stores, with scalable RESTful APIs using Spring Boot and a modular responsive frontend built with React.js and Tailwind CSS. Implemented secure authentication and authorization using JWT, designed and optimized the PostgreSQL database schema, and integrated multiple payment systems with complete order management workflows. Also handled deployment, environment configuration, and production releases using Render to ensure reliable application performance and scalability.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Graphic Design Instructor (Part-Time)',
      institution: '3C School',
      duration: 'April 2026 - present',
      description: 'Delivered structured lessons focused on design principles, creative thinking, and problem-solving while guiding students in applying design concepts to real-world projects and practical scenarios to strengthen both their technical and analytical skills.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Graphic Designer (Part-Time)',
      institution: 'Alamia Print for printing',
      duration: 'Sep 2023 - present',
      description: 'Designed print-ready marketing and branding materials with high-quality layouts while maintaining strong visual consistency across designs. Ensured accurate color output, attention to detail, and professional production standards to deliver polished final products suitable for print and commercial use.'
    },
    
  ];

  return (
    <section className={`experience-section ${isDarkMode ? 'dark' : 'light'}`} id="experience">
      {/* Animated Background */}
      <div className="experience-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>

      <div className="experience-container">
        <div className="experience-grid">
          {/* Header left */}
          <div className="experience-header-col">
            <div className="header-badge">
              <span className="badge-icon">💻</span>
              <span>My Experience</span>
            </div>
            <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-diamond">◆</span>
              <span className="divider-line"></span>
            </div>
            
          </div>
          
          {/* Timeline right */}
          <div className="experience-timeline-col">
            <div className="experience-timeline">
              {experienceData.map((item, index) => (
                <div key={index} className="experience-card-wrapper">
                  <div className="timeline-node">
                    {item.icon}
                  </div>
                  
                  <div className={`experience-card-box ${isDarkMode ? 'dark' : 'light'}`}>
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

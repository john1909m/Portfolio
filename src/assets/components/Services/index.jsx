import React, { useContext, useState, useEffect, useRef, memo } from 'react'
import './Services.scss'
import { ThemeContext } from '../../../ThemeContext'
import { FaCode, FaPalette, FaMobileAlt, FaRocket, FaShieldAlt, FaHeadset, FaCheck, FaArrowRight } from 'react-icons/fa'

// Service Card Component
const ServiceCard = memo(({ service, isDarkMode, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div
      ref={cardRef}
      className={`service-card ${isDarkMode ? 'dark' : 'light'} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`service-header ${isDarkMode ? 'dark' : 'light'}`}>
        <div className={`service-icon ${isDarkMode ? 'dark' : 'light'}`}>
          {service.icon}
        </div>
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        
        {/* Features List */}
        <ul className="features-list">
          {service.features.map((feature, idx) => (
            <li key={idx} className={`feature-item ${isDarkMode ? 'dark' : 'light'}`}>
              <span className="feature-icon">
                <FaCheck />
              </span>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA Button */}
      <button className={`service-cta ${isDarkMode ? 'dark' : 'light'}`}>
        Learn More <FaArrowRight />
      </button>
      
      <div className="card-glow"></div>
    </div>
  )
})

ServiceCard.displayName = 'ServiceCard'

// Pricing Tier Component
const PricingTier = memo(({ tier, isDarkMode, popular }) => (
  <div className={`pricing-card ${isDarkMode ? 'dark' : 'light'} ${popular ? 'popular' : ''}`}>
    {popular && <div className="popular-badge">Most Popular</div>}
    
    <h3 className="pricing-title">{tier.name}</h3>
    <div className="pricing-amount">
      <span className="currency">$</span>
      <span className="price">{tier.price}</span>
      <span className="period">/mo</span>
    </div>
    <p className="pricing-description">{tier.description}</p>
    
    <ul className="pricing-features">
      {tier.features.map((feature, idx) => (
        <li key={idx} className={`pricing-feature ${isDarkMode ? 'dark' : 'light'}`}>
          <FaCheck /> {feature}
        </li>
      ))}
    </ul>
    
    <button className={`pricing-btn ${isDarkMode ? 'dark' : 'light'}`}>
      Get Started
    </button>
  </div>
))

PricingTier.displayName = 'PricingTier'

// Main Services Component
const Services = memo(() => {
  const { isDarkMode } = useContext(ThemeContext)
  
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: [
        'React & Vue.js',
        'Node.js Backend',
        'Responsive Design',
        'Performance Optimized',
        'SEO Friendly'
      ]
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface designs',
      features: [
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'User Research',
        'Interaction Design'
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'iOS and Android applications with native performance',
      features: [
        'React Native',
        'Native Apps',
        'Cross-platform',
        'Offline Support',
        'App Store Ready'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Make your applications faster and more efficient',
      features: [
        'Code Optimization',
        'Asset Compression',
        'Caching Strategy',
        'CDN Integration',
        'Monitoring'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date',
      features: [
        'Security Audit',
        'Bug Fixes',
        'Updates',
        'Backup Strategy',
        'Monitoring'
      ]
    },
    {
      icon: <FaHeadset />,
      title: 'Consulting & Support',
      description: 'Expert guidance and ongoing technical support',
      features: [
        'Architecture Review',
        '24/7 Support',
        'Training',
        'Documentation',
        'Code Review'
      ]
    }
  ]
  
  const pricingTiers = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small projects',
      features: [
        'Single Page App',
        'Responsive Design',
        '5 Revisions',
        'Support 5 days/week',
        'Deployment included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '99',
      description: 'For growing businesses',
      features: [
        'Full Stack App',
        'Advanced Features',
        'Unlimited Revisions',
        'Priority Support',
        'SEO Optimization',
        'Analytics Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'For large-scale projects',
      features: [
        'Complex Solutions',
        'Scalable Architecture',
        'Custom Features',
        '24/7 Support',
        'Maintenance Plan',
        'Team Training'
      ],
      popular: false
    }
  ]
  
  return (
    <section className={`services-section ${isDarkMode ? 'dark' : 'light'}`} id="services">
      {/* Animated Background */}
      <div className="services-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">💼</span>
            <span>What I Offer</span>
          </div>
          <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className={`section-subtitle ${isDarkMode ? 'dark' : 'light'}`}>
            Comprehensive services tailored to your project needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>
        
        {/* Pricing Section */}
        <div className="pricing-section">
          <div className="pricing-header">
            <h3 className={`pricing-title-main ${isDarkMode ? 'dark' : 'light'}`}>
              Flexible Pricing Plans
            </h3>
            <p className={`pricing-subtitle ${isDarkMode ? 'dark' : 'light'}`}>
              Choose the perfect plan for your project
            </p>
          </div>
          
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                tier={tier}
                isDarkMode={isDarkMode}
                popular={tier.popular}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`services-cta ${isDarkMode ? 'dark' : 'light'}`}>
          <h3>Ready to get started?</h3>
          <p>Let's discuss your project and find the perfect solution</p>
          <button className={`cta-btn ${isDarkMode ? 'dark' : 'light'}`}>
            Schedule a Consultation <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'
export default Services

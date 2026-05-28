import React, { useContext, useState, useEffect, useRef, memo } from 'react'
import './Testimonials.scss'
import { ThemeContext } from '../../../ThemeContext'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Star Rating Component
const StarRating = memo(({ rating, isDarkMode }) => (
  <div className={`star-rating ${isDarkMode ? 'dark' : 'light'}`}>
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'filled' : 'empty'} />
    ))}
  </div>
))

StarRating.displayName = 'StarRating'

// Testimonial Card Component
const TestimonialCard = memo(({ testimonial, isActive, isDarkMode }) => (
  <div className={`testimonial-card ${isActive ? 'active' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
    <div className="quote-icon">
      <FaQuoteLeft />
    </div>
    
    <div className="testimonial-content">
      <p className="testimonial-text">{testimonial.text}</p>
      
      <div className="testimonial-author">
        <div className={`author-avatar ${isDarkMode ? 'dark' : 'light'}`}>
          {testimonial.avatar}
        </div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-title">{testimonial.title}</p>
        </div>
      </div>
      
      <StarRating rating={testimonial.rating} isDarkMode={isDarkMode} />
    </div>
  </div>
))

TestimonialCard.displayName = 'TestimonialCard'

// Navigation Dots Component
const NavigationDots = memo(({ total, current, onDotClick, isDarkMode }) => (
  <div className={`nav-dots ${isDarkMode ? 'dark' : 'light'}`}>
    {[...Array(total)].map((_, i) => (
      <button
        key={i}
        className={`dot ${i === current ? 'active' : ''}`}
        onClick={() => onDotClick(i)}
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ))}
  </div>
))

NavigationDots.displayName = 'NavigationDots'

// Main Testimonials Component
const Testimonials = memo(() => {
  const { isDarkMode } = useContext(ThemeContext)
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const autoPlayRef = useRef(null)
  
  const testimonials = [
    {
      id: 1,
      text: 'John is an exceptional developer who delivered our web project ahead of schedule. His attention to detail and modern design approach resulted in an amazing final product. Highly recommended!',
      name: 'Ahmed Hassan',
      title: 'CEO at TechStart',
      avatar: '👔',
      rating: 5
    },
    {
      id: 2,
      text: 'Working with John was a pleasure. He not only built a stunning website but also explained every decision he made. His combination of development skills and design knowledge is rare.',
      name: 'Fatima Al-Mansouri',
      title: 'Founder of DesignHub',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      id: 3,
      text: 'The React application John built for us is smooth, performant, and user-friendly. He provided excellent support throughout the project and was always ready to help with improvements.',
      name: 'Mohammed Ali',
      title: 'Product Manager',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      id: 4,
      text: 'I was impressed with Johns ability to understand our vision and bring it to life with modern web technologies. The project was completed on time and exceeded our expectations.',
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      id: 5,
      text: 'John brought our design concepts to life with incredible precision. His full-stack skills and attention to user experience made our platform stand out in the market.',
      name: 'Omar El-Sayed',
      title: 'CTO at InnovateLabs',
      avatar: '🚀',
      rating: 5
    }
  ]
  
  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return
    
    autoPlayRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(autoPlayRef.current)
  }, [autoPlay, testimonials.length])
  
  const handleNext = () => {
    setCurrent(prev => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }
  
  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }
  
  const handleDotClick = (index) => {
    setCurrent(index)
    setAutoPlay(false)
  }
  
  const handleMouseEnter = () => {
    setAutoPlay(false)
  }
  
  const handleMouseLeave = () => {
    setAutoPlay(true)
  }
  
  return (
    <section
      className={`testimonials-section ${isDarkMode ? 'dark' : 'light'}`}
      id="testimonials"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background */}
      <div className="testimonials-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">💬</span>
            <span>What People Say</span>
          </div>
          <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className={`section-subtitle ${isDarkMode ? 'dark' : 'light'}`}>
            Real feedback from clients and collaborators
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="carousel-container">
          {/* Testimonials Carousel */}
          <div className="carousel">
            <div className="carousel-track">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === current}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            className={`carousel-nav prev ${isDarkMode ? 'dark' : 'light'}`}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button
            className={`carousel-nav next ${isDarkMode ? 'dark' : 'light'}`}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        {/* Navigation Dots */}
        <NavigationDots
          total={testimonials.length}
          current={current}
          onDotClick={handleDotClick}
          isDarkMode={isDarkMode}
        />
        
        {/* Testimonials Stats */}
        <div className="testimonials-stats">
          <div className={`stat-item ${isDarkMode ? 'dark' : 'light'}`}>
            <span className="stat-number">{testimonials.length}+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className={`stat-item ${isDarkMode ? 'dark' : 'light'}`}>
            <span className="stat-number">5/5</span>
            <span className="stat-label">Avg. Rating</span>
          </div>
          <div className={`stat-item ${isDarkMode ? 'dark' : 'light'}`}>
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
})

Testimonials.displayName = 'Testimonials'
export default Testimonials

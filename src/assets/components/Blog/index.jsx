import React, { useContext, useState, useEffect, useRef, memo } from 'react'
import './Blog.scss'
import { ThemeContext } from '../../../ThemeContext'
import { FaCalendar, FaUser, FaClock, FaTag, FaArrowRight } from 'react-icons/fa'

// Article Card Component
const ArticleCard = memo(({ article, isDarkMode, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
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
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  
  const readingTime = Math.ceil(article.content.split(' ').length / 200)
  
  return (
    <article
      ref={cardRef}
      className={`article-card ${isDarkMode ? 'dark' : 'light'} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className={`article-image-container ${imageLoaded ? 'loaded' : ''}`}>
        <div className="image-placeholder">
          <span>{article.emoji}</span>
        </div>
        {imageLoaded && <div className="image-overlay"></div>}
        <div className="image-glow"></div>
      </div>
      
      {/* Article Content */}
      <div className="article-content">
        {/* Category Badge */}
        <div className={`category-badge ${isDarkMode ? 'dark' : 'light'}`}>
          <FaTag /> {article.category}
        </div>
        
        {/* Title */}
        <h3 className="article-title">{article.title}</h3>
        
        {/* Excerpt */}
        <p className="article-excerpt">{article.excerpt}</p>
        
        {/* Meta Information */}
        <div className="article-meta">
          <div className="meta-item">
            <FaCalendar /> {formatDate(article.date)}
          </div>
          <div className="meta-item">
            <FaClock /> {readingTime} min read
          </div>
        </div>
        
        {/* Author Info */}
        <div className={`author-info ${isDarkMode ? 'dark' : 'light'}`}>
          <span className="author-icon">
            <FaUser />
          </span>
          <span className="author-name">{article.author}</span>
        </div>
        
        {/* Read More Button */}
        <button className={`read-more-btn ${isDarkMode ? 'dark' : 'light'}`}>
          Read Article <FaArrowRight />
        </button>
      </div>
    </article>
  )
})

ArticleCard.displayName = 'ArticleCard'

// Category Filter Component
const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange, isDarkMode }) => (
  <div className={`category-filter ${isDarkMode ? 'dark' : 'light'}`}>
    {categories.map((category) => (
      <button
        key={category}
        className={`filter-btn ${activeCategory === category ? 'active' : ''} ${isDarkMode ? 'dark' : 'light'}`}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
))

CategoryFilter.displayName = 'CategoryFilter'

// Loading Skeleton Component
const SkeletonLoader = memo(({ isDarkMode }) => (
  <div className={`skeleton-card ${isDarkMode ? 'dark' : 'light'}`}>
    <div className="skeleton skeleton-image"></div>
    <div className="skeleton skeleton-badge"></div>
    <div className="skeleton skeleton-title"></div>
    <div className="skeleton skeleton-text"></div>
    <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
  </div>
))

SkeletonLoader.displayName = 'SkeletonLoader'

// Main Blog Component
const Blog = memo(() => {
  const { isDarkMode } = useContext(ThemeContext)
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const articles = [
    {
      id: 1,
      title: 'Building Modern Web Apps with React',
      excerpt: 'Learn how to build scalable and performant web applications using React hooks and modern practices.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(300),
      category: 'React',
      date: '2025-01-15',
      author: 'John Emil',
      emoji: '⚛️'
    },
    {
      id: 2,
      title: 'Spring Boot REST API Best Practices',
      excerpt: 'Master the art of building robust REST APIs with Spring Boot, security, and documentation.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(320),
      category: 'Backend',
      date: '2025-01-10',
      author: 'John Emil',
      emoji: '🍃'
    },
    {
      id: 3,
      title: 'CSS Grid Layout Mastery',
      excerpt: 'Complete guide to CSS Grid with practical examples and responsive design patterns.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(280),
      category: 'CSS',
      date: '2025-01-05',
      author: 'John Emil',
      emoji: '🎨'
    },
    {
      id: 4,
      title: 'Design Systems for Scalability',
      excerpt: 'Create consistent and maintainable design systems that scale with your product.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(310),
      category: 'Design',
      date: '2024-12-28',
      author: 'John Emil',
      emoji: '🎯'
    },
    {
      id: 5,
      title: 'JavaScript Async/Await Deep Dive',
      excerpt: 'Understanding promises, async/await, and how to handle asynchronous operations efficiently.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(300),
      category: 'JavaScript',
      date: '2024-12-20',
      author: 'John Emil',
      emoji: '⚡'
    },
    {
      id: 6,
      title: 'UI/UX Principles for Developers',
      excerpt: 'Essential UX principles every developer should know to create better user interfaces.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 'x '.repeat(290),
      category: 'Design',
      date: '2024-12-15',
      author: 'John Emil',
      emoji: '✨'
    }
  ]
  
  const categories = ['All', 'React', 'Backend', 'CSS', 'JavaScript', 'Design']
  
  // Filter articles
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      if (activeCategory === 'All') {
        setFilteredArticles(articles)
      } else {
        setFilteredArticles(articles.filter(article => article.category === activeCategory))
      }
      setIsLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [activeCategory])
  
  return (
    <section className={`blog-section ${isDarkMode ? 'dark' : 'light'}`} id="blog">
      {/* Animated Background */}
      <div className="blog-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="blog-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">📚</span>
            <span>Latest Articles</span>
          </div>
          <h2 className={`section-title ${isDarkMode ? 'dark' : 'light'}`}>
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>
          <p className={`section-subtitle ${isDarkMode ? 'dark' : 'light'}`}>
            Sharing insights on web development, design, and modern technologies
          </p>
        </div>
        
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          isDarkMode={isDarkMode}
        />
        
        {/* Articles Grid */}
        <div className="articles-grid">
          {isLoading ? (
            <>
              {[...Array(3)].map((_, i) => (
                <SkeletonLoader key={i} isDarkMode={isDarkMode} />
              ))}
            </>
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                isDarkMode={isDarkMode}
                index={index}
              />
            ))
          ) : (
            <div className={`no-articles ${isDarkMode ? 'dark' : 'light'}`}>
              <span className="no-articles-emoji">🔍</span>
              <p>No articles found in this category</p>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <div className={`blog-cta ${isDarkMode ? 'dark' : 'light'}`}>
          <h3>Want to read more?</h3>
          <p>Visit my full blog to discover more articles about web development and design</p>
          <button className={`cta-btn ${isDarkMode ? 'dark' : 'light'}`}>
            View Full Blog <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
})

Blog.displayName = 'Blog'
export default Blog

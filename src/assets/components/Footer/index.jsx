import React, { useContext, memo, useState, useEffect } from 'react'
import './Footer.scss'
import { ThemeContext } from '../../../ThemeContext'
import { FaGithub, FaLinkedin, FaBehance, FaWhatsapp, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

// Quick Link Component
const QuickLink = memo(({ href, label, isDarkMode }) => (
  <a href={href} className={`quick-link ${isDarkMode ? 'dark' : 'light'}`}>
    {label}
  </a>
))
QuickLink.displayName = 'QuickLink'

// Social Icon Component
const SocialIcon = memo(({ icon, link, label, isDarkMode }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`social-icon ${isDarkMode ? 'dark' : 'light'}`}
    aria-label={label}
    title={label}
  >
    {icon}
  </a>
))
SocialIcon.displayName = 'SocialIcon'

// Main Footer Component
const Footer = memo(() => {
  const { isDarkMode } = useContext(ThemeContext)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        document.body.classList.add('show-back-to-top');
      } else {
        document.body.classList.remove('show-back-to-top');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('show-back-to-top');
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/john1909m', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/john-emil-0134a3239/', label: 'LinkedIn' },
    { icon: <FaBehance />, link: 'https://www.behance.net/JohnEmil21', label: 'Behance' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/201200158852', label: 'WhatsApp' }
  ]
  
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ]
  
  const contactInfo = [
    { icon: <FaEnvelope />, text: 'johnemil21@yahoo.com' },
    { icon: <FaPhone />, text: '+201200158852' },
    { icon: <FaMapMarkerAlt />, text: 'Giza, Egypt' }
  ]
  
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Animated Top Border */}
      <div className="footer-top-border"></div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollTop}
        className={`back-to-top ${isDarkMode ? 'dark' : 'light'}`}
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp />
      </button>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Left Section - Brand */}
          <div className="footer-section footer-brand">
            <div className="brand-logo">JE</div>
            <p className="brand-tagline">Building beautiful digital experiences with code and creativity</p>
            <div className="brand-socials">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  {...social}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
          
          {/* Middle Section - Quick Links */}
          <div className="footer-section footer-links">
            <h3 className="section-title">Quick Links</h3>
            <nav className="links-nav">
              {quickLinks.map((link, index) => (
                <QuickLink
                  key={index}
                  {...link}
                  isDarkMode={isDarkMode}
                />
              ))}
            </nav>
          </div>
          
          {/* Right Section - Contact Info */}
          <div className="footer-section footer-contact">
            <h3 className="section-title">Contact Info</h3>
            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <span className="contact-text">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`footer-divider ${isDarkMode ? 'dark' : 'light'}`}></div>
        
        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              <span className="heart">♥</span> © {currentYear} John Emil. All rights reserved.
            </p>
          </div>
          <div className="footer-credits">
            <span>Designed & Built by John Emil</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
export default Footer
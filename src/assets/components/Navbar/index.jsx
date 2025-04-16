import React , {useState} from 'react'
import './Navbar.scss'
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFlask, FaEnvelope } from 'react-icons/fa';
const index = () => {
    const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: <FaHome size="20" />, label: 'Home' },
    { id: 'about', icon: <FaUser size="20" />, label: 'About' },
    { id: 'portfolio', icon: <FaBriefcase size="20" />, label: 'Work' },
    { id: 'education', icon: <FaGraduationCap size="20" />, label: 'Edu' },
    { id: 'experiment', icon: <FaFlask size="20" />, label: 'Labs' },
    { id: 'contact', icon: <FaEnvelope size="20" />, label: 'Contact' }
  ];

  return (
    <div className="navbar-wrapper">
      <nav className="mobile-navbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="nav-bubble">
              <div className="nav-icon">{tab.icon}</div>
              <span className="nav-label">{tab.label}</span>
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default index
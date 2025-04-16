import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFlask, FaEnvelope, FaBrain } from 'react-icons/fa';
import About from './assets/components/About'
import Header from './assets/components/header'
import { Portfolio } from './assets/components/Potfolio'
import { Education } from './assets/components/Education'
import { Skills } from './assets/components/Skills'
import Footer from './assets/components/Footer'
// import Navbar from './assets/components/Navbar'
import { Contact } from './assets/components/Contact';
function App() {
const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: <FaHome size="20" />, label: 'Home' ,link:'#home' },
    { id: 'about', icon: <FaUser size="20" />, label: 'About',link:'#about' },
    { id: 'portfolio', icon: <FaBriefcase size="20" />, label: 'Portfolio',link:'#portfolio' },
    { id: 'education', icon: <FaGraduationCap size="20" />, label: 'Education',link:'#education' },
    { id: 'contact', icon: <FaEnvelope size="20" />, label: 'Contact',link:'#home'}
  ];


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id='home'><Header></Header></div>
      <div id='about'><About></About></div>
      <div className='h-[5vh]'></div>
      <div id='skills'><Skills></Skills></div>
      <div className='h-[5vh]'></div>

      <div id='portfolio'><Portfolio></Portfolio></div>
      <div className='h-[5vh]'></div>

      <div id="education"><Education ></Education></div>
      <div className='h-[7vh]'></div>
      <div id='contact'><Contact></Contact></div>
      <div className='h-[10vh]'></div>

      <Footer></Footer>
      <div className="navbar-wrapper">
      <nav className="mobile-navbar">
        {tabs.map((tab) => (
          
            <button
          
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => {setActiveTab(tab.id);scrollToSection(tab.id)}
          }
        >
          
          <div className="nav-bubble">
            <div className="nav-icon">{tab.icon}</div>
            <span className="nav-label">{tab.label}</span>
          </div>
        </button>
          
        ))}
      </nav>
    </div>
    </>
  )
}

export default App

import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaBrain } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi";
import About from './assets/components/About'
import Header from './assets/components/header'
import { Portfolio } from './assets/components/Potfolio'
import { Education } from './assets/components/Education'
import { Skills } from './assets/components/Skills'
import Footer from './assets/components/Footer'
import ThemeToggle from './assets/components/ThemeToggle'
import BackgroundParticles from './assets/components/BackgroundParticles'
// import Navbar from './assets/components/Navbar'
import { Contact } from './assets/components/Contact';
function App() {
const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: <FaHome size="20" />, label: 'Home' ,link:'#home' },
    { id: 'about', icon: <FaUser size="20" />, label: 'About',link:'#about' },
    { id: 'skills', icon: <GiSkills size="20" />, label: 'Skills',link:'#about' },
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




  // useEffect(() => {
  //   const sections = document.querySelectorAll('div[id]');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveTab(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       threshold: 1, // section should be at least 50% visible
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, []);

function scrollForDesktop(){
  window.addEventListener("scroll",()=>{
    if(window.scrollY<1*window.innerHeight){
      setActiveTab('home')
  
    }
    else if(window.scrollY>=1.2*window.innerHeight && window.scrollY < 1.6*window.innerHeight){
      // console.log(2*window.innerHeight);
      setActiveTab('about')
      
    }
    else if(window.scrollY>=1.6*window.innerHeight && window.scrollY < 2.2*window.innerHeight){
      // console.log(2*window.innerHeight);
      setActiveTab('skills')
      
    }
    else if(window.scrollY>=2.2*window.innerHeight && window.scrollY<3.2*window.innerHeight){
      setActiveTab('portfolio')
    
    }
    else if(window.scrollY>=3.2*window.innerHeight && window.scrollY<4.2*window.innerHeight){
      setActiveTab('education')
    
    }
    else if(window.scrollY>=4.2*window.innerHeight){
      setActiveTab('contact')
    
    }
  })
}
// scrollForDesktop()

function scrollForMobiles(){
  window.addEventListener("scroll",()=>{
    if(window.scrollY<1*window.innerHeight){
      setActiveTab('home')
  
    }
    else if(window.scrollY>=1*window.innerHeight && window.scrollY < 1.8*window.innerHeight){
      // console.log(2*window.innerHeight);
      setActiveTab('about')
      
    }
    else if(window.scrollY>=1.8*window.innerHeight && window.scrollY < 3*window.innerHeight){
      // console.log(2*window.innerHeight);
      setActiveTab('skills')
      
    }
    else if(window.scrollY>=3*window.innerHeight && window.scrollY<7.1*window.innerHeight){
      setActiveTab('portfolio')
    
    }
    else if(window.scrollY>=7.1*window.innerHeight && window.scrollY<8*window.innerHeight){
      setActiveTab('education')
    
    }
    else if(window.scrollY>=8*window.innerHeight){
      setActiveTab('contact')
    
    }
  })
}


// scrollForMobiles()
    // console.log("hello");

if(window.innerWidth <= 627){
  scrollForMobiles()
}
else{
  scrollForDesktop()
}

  return (
    <>
      <BackgroundParticles />
      <ThemeToggle />
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

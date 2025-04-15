// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './assets/components/About/About'
import Header from './assets/components/header/header'
import { Portfolio } from './assets/components/Potfolio/Portfolio'
import { Education } from './assets/components/Education/Education'
import { Skills } from './assets/components/Skills/Skills'
import Footer from './assets/components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header></Header>
      <About></About>
      <div className='h-[5vh]'></div>
      <Skills></Skills>
      <div className='h-[5vh]'></div>

      <Portfolio></Portfolio>
      <div className='h-[5vh]'></div>

      <Education></Education>
      <Footer></Footer>
    </>
  )
}

export default App

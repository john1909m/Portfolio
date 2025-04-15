// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './assets/components/About/About'
import Header from './assets/components/header/header'
import { Portfolio } from './assets/components/Potfolio/Portfolio'
import { Education } from './assets/components/Education/Education'

function App() {
  

  return (
    <>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Education></Education>
    </>
  )
}

export default App

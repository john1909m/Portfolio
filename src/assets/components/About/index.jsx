import React from 'react'
import './About.scss'
const About = () => {
  return (
    <>
      <div className="about-box flex justify-center px-8">
      <div className="about-container flex md:flex-row sm:flex-col flex-col justify-evenly m-5 gap-10 ">
        <div className="about-head md:w-[26%] sm:w-full ">
          <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full "></div>
          <h2 className='font-bold text-3xl'>About me</h2>
          
        </div>
        <div className="about-content md:w-[80%] sm:w-[110%]">
          <div className="about-text">
            <p className='text-lg'>Hey!👋 I’m a Front-End Developer, Graphic Designer, and Motion Designer who loves bringing ideas to life through clean code and eye-catching design. I focus on creating smooth, user-friendly websites and visuals that feel modern and meaningful.

I work with tools like React, Figma, After Effects, and have a solid foundation in Linux. I enjoy combining design and development to create experiences that are both functional and visually engaging.

I’m always curious, always improving, and always looking for new ways to make digital work more creative, more useful, and more fun. Whether it’s a simple animation or a full web app, I’m all in on the details that make a big difference.</p>
          </div>
            <div className='h-[5vh]'></div>



        </div>
      </div>
      </div>
    </>
  )
}

export default About
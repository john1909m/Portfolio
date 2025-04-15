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
        <div className="about-content w-[80%]">
          <div className="about-text">
            <p className='text-lg'>Front-End Developer, Graphic Designer, and Motion Designer with foundational skills in Linux. Known for creating compelling, user-centric designs that uphold brand integrity and enhance digital experiences. Aiming to leverage a unique blend of creative vision and technical acumen to drive innovative and impactful projects.</p>
          </div>
            <div className='h-[5vh]'></div>



        </div>
      </div>
      </div>
    </>
  )
}

export default About
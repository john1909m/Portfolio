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


          <div className="about-skills lg:w-[100%] w-[70%] justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="skill skill-1">
              <div className="skill-content">
                <h3 className='text-[24px]'>97%</h3>
                <p className='text-[12px]'>HTML5 & CSS</p>
              </div>
            </div>
            <div className="skill skill-2">
              <div className="skill-content">
                <h3 className='text-[24px]'>90%</h3>
                <p className='text-[12px]'>Javascript</p>
              </div>
            </div>
            <div className="skill skill-3">
              <div className="skill-content">
                <h3 className='text-[24px]'>95%</h3>
                <p className='text-[12px]'>Graphic Design</p>
              </div>
            </div>
            <div className="skill skill-4">
              <div className="skill-content">
                <h3 className='text-[24px]'>80%</h3>
                <p className='text-[12px]'>Motion Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
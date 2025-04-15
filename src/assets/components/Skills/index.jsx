import React from 'react'
import "./Skills.scss"

export const Skills = () => {
  return (
    <>
        <div className="skills-container flex md:flex-row sm:flex-col  md:justify-center bg-blue-950 md:py-8 sm:px-5 sm:py-8 text-white ">
        <div className="about-head md:w-[23%] sm:w-full ">
          <div className="about-fx w-14 bg-orange-500 h-[15px] mb-3 rounded-full "></div>
          <h2 className='font-bold text-3xl'>My Skills</h2>
          
        </div>
            <div className='h-[5vh]'></div>
        <div className="skills-box border-4 py-6 flex justify-evenly rounded-2xl bg- border-orange-500 md:w-[70%] sm:w-[90%]">
            <ul className='flex flex-wrap justify-center w-[80%] gap-10 text-2xl font-semibold'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.Js</li>
                <li>Vite.Js</li>
                <li>Git & GitHub</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Premire Pro</li>
                <li>After Effects</li>
            </ul>
        </div>


        </div>
    </>
  )
}

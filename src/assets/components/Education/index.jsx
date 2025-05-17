import React, { useContext } from 'react'
import "./Education.scss"
import { ThemeContext } from '../../../ThemeContext'
import { FaGraduationCap, FaCode, FaPaintBrush } from 'react-icons/fa'

export const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <>
      <div className="education-container text-white bg-blue-950 py-10 px-5 md:px-10">
        <div className="container mx-auto">
          <div className="flex md:flex-row sm:flex-col flex-col justify-around">
            <div className="about-head md:w-[30%] sm:w-full mb-8 md:mb-0">
              <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full"></div>
              <h2 className='font-bold text-3xl'>Education</h2>
              <p className="text-gray-300 mt-3 max-w-xs">My academic background and professional certifications</p>
            </div>
            
            <div className="education-content md:w-[65%] sm:w-full">
              <div className="education-timeline relative pl-8 border-l-2 border-orange-500">
                <div className="education-card mb-10 relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 bg-blue-900 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-400">
                    <FaGraduationCap className="text-lg" />
                  </div>
                  <div className="education-card-content p-6 rounded-lg bg-blue-900/50 border border-blue-800 hover:border-orange-500/50 shadow-lg transition-all duration-300 hover:shadow-orange-900/20 hover:-translate-y-1">
                    <h2 className='text-2xl font-semibold mb-2'>Bachelor in Engineering</h2>
                    <h3 className='text-lg text-orange-500 mb-1'>Modern Academy for Engineering & technology</h3>
                    <h4 className='text-md text-gray-400'>Expected Graduation year 2028</h4>
                  </div>
                </div>
                
                <div className="education-card mb-10 relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 bg-blue-900 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-400">
                    <FaCode className="text-lg" />
                  </div>
                  <div className="education-card-content p-6 rounded-lg bg-blue-900/50 border border-blue-800 hover:border-orange-500/50 shadow-lg transition-all duration-300 hover:shadow-orange-900/20 hover:-translate-y-1">
                    <h2 className='text-2xl font-semibold mb-2'>Front-End Development</h2>
                    <h3 className='text-lg text-orange-500 mb-1'>MEC Academy</h3>
                    <p className='text-md text-gray-400'>Experienced in front-end development with hands-on training in HTML, CSS, Javascript and UI design through structured course projects.</p>
                  </div>
                </div>
                
                <div className="education-card relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 bg-blue-900 rounded-full border-4 border-orange-500 flex items-center justify-center text-orange-400">
                    <FaPaintBrush className="text-lg" />
                  </div>
                  <div className="education-card-content p-6 rounded-lg bg-blue-900/50 border border-blue-800 hover:border-orange-500/50 shadow-lg transition-all duration-300 hover:shadow-orange-900/20 hover:-translate-y-1">
                    <h2 className='text-2xl font-semibold mb-2'>Graphic design diploma</h2>
                    <h3 className='text-lg text-orange-500 mb-1'>Arcplan Group</h3>
                    <p className='text-md text-gray-400'>I gained hands-on experience with design principles, tools, and software. Throughout the course, I successfully performed a variety of design tasks, including logo creation, branding, poster design, and digital illustrations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

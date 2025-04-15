import React from 'react'
import "./Education.scss"

export const Education = () => {
  return (
    <>

      <div className="about-container text-white bg-blue-950 flex md:flex-row sm:flex-col flex-col justify-around p-10  ">
        <div className="about-head w-[30%] ">
          <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full "></div>
          <h2 className='font-bold text-3xl'>Education</h2>
          
        </div>
        <div className='h-[5vh]'></div>
        <div className="about-content md:w-[60%] sm:w-[90%] ">
          <div className="Education-text">
            <ul className='education-points'>
                <li>
                    <h2 className='text-2xl font-semibold'>Bachelor in Engineering</h2>
                    <h3 className='text-lg text-orange-500'>Modern Academy for Engineering & technology</h3>
                    <h4 className='text-lg text-gray-400'>Expected Graduation year 2028</h4>
                </li>
                <div className='h-[5vh]'></div>
                <li>
                    <h2 className='text-2xl font-semibold'>Front-End Development</h2>
                    <h3 className='text-lg text-orange-500'>MEC Academy</h3>
                    <p className='text-lg text-gray-400'>Experienced in front-end development with hands-on training in HTML, CSS, Javascript and UI design through structured course projects.</p>
                </li>
                <div className='h-[5vh]'></div>
                <li>
                    <h2 className='text-2xl font-semibold'>Graphic design diploma</h2>
                    <h3 className='text-lg text-orange-500'>Arcplan Group</h3>
                    <p className='text-lg text-gray-400'>I gained hands-on experience with design principles, tools, and software. Throughout the course, I successfully performed a variety of design tasks, including logo creation, branding, poster design, and digital illustrations.</p>
                </li>
            </ul>
          </div>
            



        </div>
      </div>

    </>
  )
}

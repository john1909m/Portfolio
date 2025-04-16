import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <>
        <div className='cover-container'>
            <img className='' src="/images/creative_workspace_laptop_design_vs_code.jpg" alt="Cover photo" />
        
        </div>

        <div className="profile-container flex h-[95vh] w-full justify-center">

            <div className="profile rounded-lg shadow-black-800 bg-white shadow-2xl sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col p-3">

                <img className='profile-photo w-[250px] h-[250px] rounded-full' src="/images/IMG_36834.webp" alt="Profile Photo" />


                <div className="profile-info flex flex-col">
                    

                <h1 className='text-5xl font-bold mb-4'>John Emil</h1>
                <h3 className='text-2xl text-orange-500 font-semibold'>Front-End Developer & Graphic Designer</h3>
                <div className='h-[5vh]'></div>
                <p className='text-lg mb-2'><strong>✉️Email: </strong>johnemil21@yahoo.com</p>
                <p className='text-lg mb-2'><strong>📞Phone: </strong>+201200158852</p>
                <p className='text-lg'><strong>Giza</strong> - October</p>
                    <div className='h-[5vh]'></div>
                <div className="profile-links flex justify-between w-[80%]">
                    <a href="https://github.com/john1909m" target='blank'><img className='w-12 bg-orange-500 p-2  hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full' src="/images/github-142-svgrepo-com (1).svg" alt="" /></a>
                    <a href="https://www.behance.net/JohnEmil21" target='blank'><img className='w-12 bg-orange-500 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full' src="/images/behance-round-svgrepo-com.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/john-emil-0134a3239/" target='blank'><img className='w-12 bg-orange-500 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full' src="/images/linkedin-round-svgrepo-com.svg" alt="" /></a>
                    <a href="https://www.instagram.com/_john_emil_?igsh=MXU3MzZvMmd1ZzNtYg%3D%3D&utm_source=qr" target='blank'><img className='w-12 bg-orange-500 p-2 hover:bg-transparent cursor-pointer transition-all hover:scale-125 rounded-full' src="/images/instagram-f-svgrepo-com.svg" alt="" /></a>
                </div>
                <div className='h-[3vh]'></div>

                    <a href="https://drive.google.com/file/d/1XBsGcMrIB9oeeDLS9wDxapu3gfR-oFhB/view" target='blank'><button className='bg-orange-500 text-black p-5 rounded-xl font-bold text-[16px] hover:bg-transparent hover:border-[1px] hover:text-orange-500 hover:border-orange-500 transition-all hover:translate-y-2 hover:scale-110'>Download CV</button></a>

                </div>

            </div>
        </div>
    </>
  )
}

export default Header
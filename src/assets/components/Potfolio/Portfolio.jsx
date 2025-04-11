import React from 'react'

export const Portfolio = () => {
  return (
    <>
        <div className="portfolio-head m-10 mx-14 flex justify-between w-[70%] ">
            <div className="portfolio-head-header">
                <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full "></div>
        
                <h2 className='font-bold text-3xl'>Porfolio</h2>
            </div>
            <div className="portfolio-category mt-5 w-[50%]">
                <ul className='flex w-full justify-between align-text-bottom'>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">Graphic Design</a></li>
                </ul>
            </div>
        </div>

        <div className="portfolio-content  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-5">


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>
            


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>


            <div className="portfolio-card  border-red-500 h-[50vh] p-5 flex flex-col justify-between bg-orange-50 rounded-lg">
                <img className='rounded-lg' src="/src/assets/images/Screenshot 2025-04-12 001802.webp" alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>Educator</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'>GitHub repo</button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'>Live Demo</button>
                </div>
            </div>


        </div>
    </>
  )
}

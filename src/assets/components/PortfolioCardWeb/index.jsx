import React from 'react'

export const PortfolioCardWeb = ({image,Name,gitHub,liveDemo}) => {
  return (
    <>
        <div className="portfolio-card hover:cursor-pointer border-red-500 h-[50vh] p-5 flex flex-col justify-between rounded-lg">
                <img className='rounded-lg' src={image} alt="" />
                <h3 className='text-center text-2xl font-semibold underline'>{Name}</h3>
                <div className="card-buttons flex justify-center gap-5">
                    <button className='border-2 border-orange-500 p-2 rounded-lg font-bold text-orange-600 hover:bg-orange-500 cursor-pointer hover:scale-110 transition-all hover:text-black'><a target='_blank' href={gitHub}>GitHub repo</a></button>
                    <button className='bg-orange-500 p-2 rounded-lg font-bold hover:bg-transparent cursor-pointer hover:scale-110 transition-all hover:text-orange-600 hover:border-2 hover:border-orange-500'><a target='_blank' href={liveDemo}>Live Demo</a></button>
                </div>
            </div>
    </>
  )
}

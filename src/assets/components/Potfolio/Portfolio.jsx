import React from 'react'
import { useState } from 'react'
import {Graphic , Web} from "../PorfolioDataWeb"
import { PortfolioCardWeb } from '../PortfolioCardWeb/PortfolioCardWeb'
import PortfolioCardGraphic from '../PorfolioCardGraphic/PortfolioCardGraphic'
export const Portfolio = () => {

    const [selectedCategory, setSelectedCategory] = useState('web');


    const renderPorfolioWeb=Web.map((card,index)=>(<PortfolioCardWeb key={index} {...card}/>))

    const renderPorfolioGraphic=Graphic.map((card,index)=>(<PortfolioCardGraphic key={index} {...card}/>))
  return (
    <>
        <div className="portfolio-head m-10 mx-14 flex justify-between w-[70%] ">
            <div className="portfolio-head-header">
                <div className="about-fx w-20 bg-orange-500 h-[15px] mb-3 rounded-full "></div>
        
                <h2 className='font-bold text-3xl'>Porfolio</h2>
            </div>
            <div className="portfolio-category mt-5 w-[50%]">
                <ul className='flex w-full justify-between align-text-bottom'>
                    <li className='hover:cursor-pointer hover:bg-orange-500 hover:font-bold font-semibold p-3 transition-all rounded-lg' onClick={()=> setSelectedCategory('web')}>Web Design</li>
                    <li className='hover:cursor-pointer hover:bg-orange-500 hover:font-bold font-semibold p-3 transition-all rounded-lg' onClick={()=> setSelectedCategory('graphic')}>Graphic Design</li>
                </ul>
            </div>
        </div>

        <div className="portfolio-content  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-5">
            
        {selectedCategory==='web'?(renderPorfolioWeb): (renderPorfolioGraphic)}

        </div>
    </>
  )
}

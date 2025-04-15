import React from 'react'
import "./PortfolioCardGraphic.scss"
const PortfolioCardGraphic = ({image}) => {
    console.log(image);
    
  return (
    <>
        <div className="portfolio-card hover:cursor-pointer border-red-500 h-fit p-5  bg-orange-50 rounded-lg">
                <img className='rounded-lg' src={image} alt="image" />
                
            </div>
    </>
  )
}

export default PortfolioCardGraphic
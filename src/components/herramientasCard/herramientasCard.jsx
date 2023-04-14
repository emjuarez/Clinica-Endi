import React from 'react'
import "./herramientasCard.css"

const HerramientasCard = ({ imageSrc, paragraphText}) => {
  return (
    <div className='herramientasCardMainDiv'>
        <img src={imageSrc} alt="firstImage" className='herramientasImage'/>
        <p className='herramientasP'>{paragraphText}</p>
    </div>
  )
}

export default HerramientasCard
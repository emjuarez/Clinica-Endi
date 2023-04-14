import React from 'react'
import "./moduloCard.css"

const ModuloCard = ({ imageSrc, paragraphText}) => {
  return (
    <div className='modCarMainDiv'>
      <img src={imageSrc} alt="firstImage" className='ModCardImage' />
      <p className='ModCardP'>{paragraphText}</p>
    </div>
  )
}

export default ModuloCard
import React from 'react'
import "./firstHorizontal.css"

const FirstHorizontalCard = ({ imageSrc, paragraphText }) => {
  return (
    <div className='firstHorCaMainDiv'>
      <img src={imageSrc} alt="firstImage" className='horCardImage' />
      <p className='horCardP'>{paragraphText}</p>
    </div>
  )
}

export default FirstHorizontalCard
import React from 'react'
import "./testimonioCard.css"

const TestimonioCard = ({persona, children}) => {
  return (
      <div className='testimonioContainer'>
        <div className='testimonioCardMain'>
            <div className='personaDiv'>
                <p className='peropnaP'>{persona}</p>
            </div>
            {children}
        </div>
      </div>

  )
}

export default TestimonioCard
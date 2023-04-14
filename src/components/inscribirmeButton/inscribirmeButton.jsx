import React from 'react'
import "./inscribirmeButton.css"

const InscribirmeButton = ({text}) => {
  return (
    <a href="https://clinicaendi-s-school-ed2f.thinkific.com/bundles/DiplomadoDiabetesInsulina" className='buttonA'>
        <div className='butonDiv'>
            <p className='buttonText'>{text}</p>
        </div>
    </a>

  )
}

export default InscribirmeButton
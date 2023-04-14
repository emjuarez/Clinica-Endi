import React from 'react'
import "./beneficiosCard.css"

const BeneficiosCard = ({beneficioNumber, children, info, beneficioPinkP}) => {
  return (
    <div className='beneficioCardMainDiv'>
        <h1 className='beneficioTitle'>{beneficioNumber}</h1>
        {children}
        <p className='beneficioInfo'>{info}</p>
        <div className='beneficoPink'>
            <p className='beneficioPinkP'>{beneficioPinkP}</p>
        </div>
    </div>
  )
}

export default BeneficiosCard
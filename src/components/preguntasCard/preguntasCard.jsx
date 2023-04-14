import React from 'react'
import { useState } from 'react';
import "./preguntasCard.css"
import arrowUpImage from "../../assets/mobile/CaretDown.png"

const PreguntasCard = ({ title, expandedContent }) => {
    const [expanded, setExpanded] = useState(false);

    function toggleExpanded() {
      setExpanded(prevExpanded => !prevExpanded);
    }

  return (
    <>
      <div className='preguntaCardMainDiv'>
        <p className='pregunta'>{title}</p>
        <div style={{ marginLeft: 'auto' }}>
            <img
                src={ arrowUpImage}
                alt="arrow"
                style={{ cursor: 'pointer' }}
                onClick={toggleExpanded}
                className='arrowdown'
            />
        </div>
      </div>
      {expanded && 
      <div>
        <p className='respuesta'>{expandedContent}</p>
      </div>}
     
    </>
  )
}
export default PreguntasCard;


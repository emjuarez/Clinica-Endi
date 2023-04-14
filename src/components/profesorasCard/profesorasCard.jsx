import React, { Children } from 'react'
import "./profersorasCArd.css"

const ProfesorasCard = ({ imageSrc, nombre, title, firstLi, secondtLi, thirdtLi, children}) => {
  return (
    <div className='profesorasCmainDiv'>
      <img src={imageSrc} alt="firstImage" className='profImage'/>
      <h3 className='profName'>{nombre}</h3>
      <p className='profTitle'>{title}</p>
      <ul className='profList'>
        <li>{firstLi}</li>
        <li>{secondtLi}</li>
        <li>{thirdtLi}</li>
        {children}
      </ul>
    </div>
  )
}

export default ProfesorasCard
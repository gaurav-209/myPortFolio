import React from 'react'
import './Card4.css'

const Card4 = ({ imagesrc, text, alttext}) => {
  return (
    <div className='card4'><img src={imagesrc}alt={alttext} className='card4-image' /><p className='card4p'>{text}</p></div>
  )
}

export default Card4
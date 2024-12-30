import React from 'react'
import './image-card.css'

const image_card = () => {
  return (
    <div><img src={imagesrc} alt={alttext} className='imagecard'/></div>
  )
}

export default image_card
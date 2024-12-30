import React from 'react'
import './Image1_card.css'

const Image_card = ({imagesrc, alttext}) => {
  return (
    <div><img src={imagesrc} alt={alttext} className='imagecard'/></div>
  )
}

export default Image_card
import React from 'react'
import './Card2.css'

const Card2 = (props) => {
  return (
    <>
    <div className="card2">
    <div className='img'>{props.img}</div>
    <div className="title">{props.title}</div>
    <div className="desc">{props.desc}</div>
    </div>
    </>
    
  )
}

export default Card2
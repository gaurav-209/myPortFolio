import React from 'react'
import './LetsConnectCard.css'
import { NavLink } from 'react-router-dom'

const LetsConnectCard = () => {
  return (
    <div>
        <div className="Letsconnect-container">
                    <div className="shape-container">
                        {/* Parallelogram */}
                        <div className="parallelogram">
                            {/* Circle */}
                        </div>
                        <div className="circle">
                        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Contact">Let's Connect</NavLink> 
                            <svg width="20" height="30" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00003 6H18V17H16V9.41421L7.00003 18.4142L5.58582 17L14.5858 8H7.00003V6Z" fill="#000" />
                        </svg>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default LetsConnectCard
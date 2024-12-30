import React from 'react'
import { useRef } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <div className='logo'>
        <h3 className='gt'>&lt;&#47;&gt;&nbsp;</h3><h3 className='name1'>GAURAV</h3>
      </div>
      <nav ref={navRef}>

        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/About">About</NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Portfolio">Portfolio</NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Service">Services</NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact">Contact</NavLink>

        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
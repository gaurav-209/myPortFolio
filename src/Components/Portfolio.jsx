import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Portfolio.css'
import Project from './Project';
import LetsConnectCard from './LetsConnectCard';



const Portfolio = () => {

  return (
    <>
      <main>
        <Navbar />
        <div className="portfolio-container">
          <h2>Portfolio</h2>
          <h4></h4>
        </div>
        <div className="section-3">
          <LetsConnectCard/>
          <div style={{ backgroundColor: "#363434", paddingTop: "30px", color: "#faaa60" }} >
            <h2 style={{ textAlign: "center" }}>Projects That Define Me</h2>
          </div>
          <div style={{ backgroundColor: "#363434", paddingBottom: "30px", color: "white" }} >
            <h3 style={{ textAlign: "center" }}>From ideas to execution, here’s what I’ve built</h3>
          </div>
          <Project />
        </div>
        <div className="section-2">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Portfolio
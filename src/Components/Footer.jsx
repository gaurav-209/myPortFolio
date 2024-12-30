import React from 'react'
import './Footer.css'
import Image_card from './Image_card'
import Button from './button'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="gallery">
                <Image_card imagesrc='/images/gallery-image-1.png' alttext="Gaurav Mahavar Portfolio  Image" />
                <Image_card imagesrc='/images/gallery-image-2.png' alttext="Gaurav Mahavar Dynamic Website Image" />
                <Image_card imagesrc='/images/gallery-image-3.png' alttext="Gaurav Mahavar Responsive Website Image" />
                <Image_card imagesrc='/images/gallery-image-4.png' alttext="Gaurav Mahavar React Developer Image" />
            </div>
            <div className="line1"></div>
            <div className='project'>
                <div style={{ color: "white" }}><h2>Got A Project In Mind?</h2>
                    <h2>Let's Talk</h2></div>
                <Button text="Available For Project" link="/contact" />
            </div>
            <div className="lines">
                <div className="line2"></div><div className="line3"></div>
            </div>
            <div className="footerbox">
                <div className="social-box">
                    <a href="https://www.linkedin.com/in/gaurav-mahavar-688114215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/images/linkedin-icon.png" alt="visit to Gaurav Mahavar Linkedin Profile" className='social-icon' /></a>
                    <a href="https://www.instagram.com/codewithgaurav.in/"><img src="/images/instagram-icon.png" alt="visit to Gaurav Mahavar instagram Profile" className='social-icon' /></a>
                    <a href="https://github.com/gaurav-209"><img src="/images/github-icon.png" alt="visit to Gaurav Mahavar Github Profile" className='social-icon' /></a>
                </div>
                <div>
                    <h1 className='thanks' style={{ color: "#faaa60", paddingTop: "20px" }}>Thanks For Scrolling</h1>
                    <h3 className='thanks' style={{ color: "white", paddingTop: "20px" }}>Copyright &amp; 2024 CodeWithGaurav.com | All Rights Reserved</h3>
                </div>
            </div>
        </>
    )
}

export default Footer
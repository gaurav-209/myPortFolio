import React from 'react'
import Navbar from './Navbar'
import "./home.css"
import Typed from 'typed.js';
import Button from './button';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Webcards from './webcards';
import LetsConnectCard from './LetsConnectCard';

const Home = () => {
    {
        if (window.innerWidth <= 750) {
            const div = document.getElementById("visible");
            if (div) div.remove(); // Removes the div from the DOM
        }
    }

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        // Example: Fetching JSON data (replace with your actual API or file path)
        fetch("/data/myskills.json")
            .then((response) => response.json())
            .then((data) => setCardData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Web Designer', 'React Developer'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <>
            <main>
                <div className="section-1">
                    <div className='container'>
                        <Navbar />
                        <div className="container-1">
                            <div className="left">
                                <div className="just-center">
                                    <p className='intro'>Introducing me</p>
                                    <h1 style={{ fontSize: "45px" }}>
                                        Hey, I am <div className="orange">Gaurav Mahavar</div> a passionate and creative
                                        <div className="element">
                                            <span ref={el} />
                                        </div>
                                    </h1>
                                    <Button text='Hire Me' link='/Contact' />
                                </div>
                            </div>
                            <div className="right visible">
                                <img className='image' src="\images\g-1.png" alt="Gaurav Mahavar responsive reactjs portfolio" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="section-2">
                    <div className="container-1">
                        <div className="right">
                            <img className='image' src="\images\g-3.png" alt="Gaurav Mahavar dynamic portfolio website" />
                            <div className="degree-90">GAURAV MAHAVAR</div>
                        </div>
                        <div className="left">
                            <h1>About Me</h1>
                            <p>
                                I'm a passionate and results-driven web developer based in India, specializing in building <strong>efficient, responsive, and user-centric web applications</strong>. My expertise lies in crafting <strong>innovative and functional digital solutions</strong> that deliver seamless user experiences.
                            </p>
                            <p>
                                With a commitment to continuous learning and staying ahead of the curve in <strong>web development technologies</strong>, I bring creative ideas to life through clean, efficient code. For me, every project is a chance to <strong>solve problems, push boundaries</strong>, and create <strong>meaningful digital experiences</strong> that leave a lasting impact.
                            </p>
                            <div className="container-2">
                                <div className="left-1" style={{ color: "#7EA9E6" }}>Brainy Beams Technology Pvt ltd <br />
                                    Web Developer Intern <br />
                                    <br />
                                    Medilink Hospital Pvt Ltd <br />
                                    Chasless Officer <br />
                                    <br />
                                    Shopper Stop Pvt Ltd <br />
                                    Customer Care Associate
                                </div>
                                <div className="right-1" style={{ color: "#faaa60" }}>2024 - 24 <br />
                                    <br />
                                    <br />
                                    2023 - 24 <br />
                                    <br />
                                    <br />
                                    2020 -23
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section-3 */}
                <LetsConnectCard />

                <div className="section-2">
                    <h1 style={{ color: "#faaa60", textAlign: "center", paddingTop: "50px" }}>My Expertise</h1>
                    <div className="grid-container">
                        <div className="box box-1">Website Development</div>
                        <div className="box box-2">React Development</div>
                        <div className="box box-3"><img src="\images\g-1.png" alt="Gaurav Mahavar Portfoilo Website" /></div>
                        <div className="box box-4">UI/UX Designer</div>
                        <div className="box box-5">Web Designer</div>
                    </div>
                </div>

                <div className="responsive">
                    <div className="section-2">
                        <div className="flex">
                            <Card1 text="02+ Years Of Eperience" />
                            <Card1 text="03+ Companies Served" />
                            <Card1 text="05+ Projects Completed" />
                            <Card1 text="05+ Satisfied Clients" />
                        </div>
                        <div className="sect-3">
                            <p className='intro' style={{ textAlign: "center" }}>Explore My Work</p>
                            <h1 style={{ color: "white", textAlign: "center" }}>Featured Projects</h1>
                            <div className="webbox">
                                <Webcards />
                                <Button text='More' link="/portfolio" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="responsive1">
                    <div className="section-2">
                        <div className='myskills' >
                        <h3>My skills showcase deep expertise, hands-on experience, and a passion for web development, driving innovation and successful outcomes.</h3>
                        </div>
                        <div className="card-box">
                            <Card3 data={cardData} />
                        </div>
                        <div className="contact-box">
                            <div className="hide">Contact Me</div>
                            <div className="contact">
                                <div className="contact1">
                                    <Card4 imagesrc="/images/email-icon.png" alttext="Gaurav Mahavar portfolio email icon" text="gauravmahavar2002@gmail.com" />
                                    <Card4 imagesrc="/images/phone-icon.png" alttext="Gaurav Mahavar portfolio phone icon" text="(+91) 8347491728" />
                                </div>
                                <Card4 imagesrc="/images/location-icon.png" alttext="Gaurav Mahavar portfolio location icon" text="Gujarat, India" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="section-2">
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Home
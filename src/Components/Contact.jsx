import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
import Footer from './Footer'
import { useState } from 'react'
import Button from './button'
import Card4 from './Card4'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <div>
            <div className='contacts-container'>
                <main>
                    <Navbar />
                    <div className="contacts-container">
                        <div className="contact-container">
                            <h1>Contacts</h1>
                            <div className="contact-form">
                                <div className="contact-left">
                                    <h2>Let's Talk About Your Next Project</h2>
                                    <p>Transform your ideas into reality with innovative and tailored web solutions.
                                        Let’s collaborate to create something extraordinary together!</p>
                                    <div className="line4"></div>

                                    <div className="form-row"><div className="square"><Card4 imagesrc="/images/email-icon.png" alttext="email icon" /></div>
                                        <div className="texts"><h4>Phone</h4><p>+91 8347491728</p></div></div>
                                    <div className="form-row"><div className="square"><Card4 imagesrc="/images/phone-icon.png" alttext="phone icon" /></div>
                                        <div className="texts"><h4>Email</h4><p>gauravmahavar2002@gmail.com</p></div></div>
                                    <div className="form-row"><div className="square"><Card4 imagesrc="/images/location-icon.png" alttext="location icon" /></div>
                                        <div className="texts"><h4>Address</h4><p>Gujarat, India</p></div></div>
                                </div>
                                <div className="contact-right">
                                    <form action='https://formsubmit.co/gauravmahavar2002@gmail.com' method='POST' className='form-container'>
                                        <div style={{ marginBottom: "10px" }} className='form-row'>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{ width: "100%", padding: "14px", marginTop: "5px", color: "white", backgroundColor: "black", borderRadius: "10px", border: "1px solid #faaa60" }} required />
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" style={{ width: "100%", padding: "14px", marginTop: "5px", color: "white", backgroundColor: "black", borderRadius: "10px", border: "1px solid #faaa60" }} required />
                                        </div>
                                        <div style={{ marginBottom: "10px" }} className='form-row'>
                                            <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" style={{ width: "100%", padding: "14px", marginTop: "5px", color: "white", backgroundColor: "black", borderRadius: "10px", border: "1px solid #faaa60" }} required />
                                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" style={{ width: "100%", padding: "14px", marginTop: "5px", color: "white", backgroundColor: "black", borderRadius: "10px", border: "1px solid #faaa60" }} required />
                                        </div>
                                        <div style={{ marginBottom: "10px" }}>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" style={{ width: "100%", padding: "14px", marginTop: "5px", height: "100px", color: "white", backgroundColor: "black", borderRadius: "10px", border: "1px solid #faaa60" }} required />
                                        </div>
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_autoresponse" value="Thank you for your message" />
                                        <div className="btn"><button type="submit">Submit</button>{<svg width="24" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.00003 6H18V17H16V9.41421L7.00003 18.4142L5.58582 17L14.5858 8H7.00003V6Z" fill="#faaa60" />
                                        </svg>}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="section-2">
                            <div className="faq-container">
                                <div className="faq">
                                    <h2>FAQ</h2>
                                    <p>
                                        Find answers to all your questions about our products and billing. <br />
                                        Still have queries? Don't worry—reach out to me, and I'll be happy to assist you!
                                    </p>

                                </div>
                                <div className="questions">
                                    <div className="que-flex">
                                        <h3>1. What services do you offer?</h3>
                                        <p>
                                            I specialize in <strong>web development</strong>, focusing on creating <strong>responsive, user-friendly websites</strong> and applications. My expertise includes:
                                        </p>
                                        <ul>
                                            <li>React.js development for dynamic and scalable solutions.</li>
                                            <li>Front-end design that ensures visually appealing interfaces.</li>
                                            <li>Integration with databases like MongoDB for efficient data handling.</li>
                                        </ul>
                                        <p>
                                            Whether you need a <strong>single-page application</strong>, an <strong>e-commerce website</strong>, or a <strong>portfolio</strong>, I deliver tailored solutions to meet your unique requirements.
                                        </p>
                                        <h3>2. How long will it take to complete my project?</h3>
                                        <p>
                                            The project timeline varies based on complexity and scope:
                                        </p>
                                        <ul>
                                            <li>A simple portfolio site typically takes 1-2 weeks.</li>
                                            <li>A more complex e-commerce platform may take 4-6 weeks.</li>
                                        </ul>
                                        <p>
                                            After discussing your requirements, I will provide a detailed timeline during our initial consultation.
                                        </p>

                                    </div>
                                    <div className="que-flex">
                                        <h3>3. What is your development process?</h3>
                                        <p>I follow a structured and efficient workflow to deliver high-quality results:</p>
                                        <ul>
                                            <li><strong>Understanding Requirements:</strong> Discuss your vision, goals, and specific needs.</li>
                                            <li><strong>Design & Planning:</strong> Create wireframes and a comprehensive project roadmap.</li>
                                            <li><strong>Development:</strong> Build the website or application using modern frameworks and best practices.</li>
                                            <li><strong>Testing:</strong> Conduct rigorous testing for bugs, responsiveness, and performance.</li>
                                            <li><strong>Deployment & Support:</strong> Launch the project and provide ongoing maintenance if needed.</li>
                                        </ul>
                                        <h3>4. Will my website be mobile-friendly?</h3>
                                        <p>
                                            Absolutely! All websites I develop are fully <strong>responsive</strong> and optimized for desktops, tablets, and smartphones. I prioritize delivering a seamless user experience across all screen sizes.
                                        </p>
                                    </div>
                                    <div className="que-flex">
                                        <h3>5. What technologies do you use?</h3>
                                        <p>I use the latest technologies to deliver <strong>modern, scalable, and secure solutions</strong>:</p>
                                        <ul>
                                            <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Bootstrap.</li>
                                            <li><strong>Backend/Database:</strong> MongoDB for dynamic content management.</li>
                                            <li><strong>Version Control:</strong> Git & GitHub to ensure efficient and secure development workflows.</li>
                                        </ul>
                                            <h3>6. Do you provide maintenance or updates after the project is completed?</h3>
                                            <p>
                                                Yes, I offer comprehensive post-launch support and maintenance services, including:
                                            </p>
                                            <ul>
                                                <li>Fixing bugs or performance issues.</li>
                                                <li>Adding new features or making updates as needed.</li>
                                            </ul>
                                            <p>
                                                We can discuss a customized maintenance plan to ensure your website stays up-to-date and performs optimally.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#363434", display: "flex", justifyContent: "center" }}>
                            <div className="getInTouch-container">
                                <div>
                                    <h3 style={{ paddingBottom: "15px" }}> Still Have A Question?</h3>
                                    <p>Can’t find the answer you’re looking for? Please Feel Free For Friendly chat with me.</p>
                                </div>
                                <Button text="Get In Touch" link="/" />
                            </div>
                        </div>
                    </div>
                </main>
                <div className="section-2"><Footer /></div>

            </div>
        </div>
    )
}

export default Contact
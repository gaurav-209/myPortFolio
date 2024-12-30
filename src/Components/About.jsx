import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './About.css'
import Button from './button'

const About = () => {
  return (
    <div>
      <main>
        <Navbar />
        <div className="about">
          <h2>About</h2>
        </div>
        <div className="section-2">
          <div className="about-container">
            <div className="about-left">
              <p className='ideas'>"Turning ideas into responsive, modern web experiences."</p>
              <div className="img-box">
              </div>
              <img src="/images/g-3.png" alt="Gaurav Mahavar About Image" />
            </div>
            <div className="about-right">
              <h1>Frontend</h1>
              <h1>Developer.</h1>
              <p>I specialize in crafting <strong>robust</strong> and <strong>scalable frontend solutions</strong> that deliver exceptional user experiences.</p>
              <p>
                As a passionate and innovative <strong>web developer</strong> based in India, I am committed to creating <strong>high-performance, responsive, and user-centric web applications</strong>. With a keen eye for design and functionality, I stay ahead of the curve by continuously honing my skills and exploring emerging technologies. Every project I work on is not just an assignment—it's an opportunity to innovate, grow, and deliver impactful digital experiences that leave a lasting impression.
              </p>
              <div class='relative'>
                <p><strong>Expertise in progressive enhancement, design systems, and UI engineering</strong>, ensuring seamless and accessible digital interfaces.</p>
                <p>
                  Driven by a deep passion for building <strong>world-class digital products</strong> for clients across the globe, I aim to bridge creativity and technology to meet diverse needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="resposive">
          <div className="section-2">
            <div className="story-container">
              <div className="story-left">
                <h3>My Journey as a Web Developer</h3>
                <p>Greetings! I'm <strong>Gaurav Mahavar</strong>, a 22-year-old driven and creative <strong>web developer</strong> with a rich professional background and an unrelenting passion for building <strong>transformative digital experiences</strong>. My story begins at <strong>Silver Oak University</strong>, where I first fell in love with the art of programming. The thrill of transforming ideas into functional, impactful solutions ignited a spark that continues to fuel my journey today.</p>
                <p>Before diving into the tech world, I cultivated essential <strong>professional and interpersonal skills</strong> in customer service and operations. At <strong>Shoppers Stop</strong>, where I worked as a <strong>Customer Care Associate</strong> for 2.5 years, I honed my abilities in communication, problem-solving, and client relations. Later, as a <strong>Cashless Officer</strong> at Medilink Hospital for 1.2 years, I managed intricate insurance processes, ensuring seamless patient services. These roles taught me the value of <strong>teamwork, precision, and exceptional service</strong>—qualities I now channel into every web development project I undertake.</p>
                <p>My technical journey began with mastering <strong>JavaScript, HTML5, CSS3</strong>, and <strong>Python</strong>. I soon discovered the power of <strong>React.js</strong>, which revolutionized my approach to front-end development. This experience cemented my love for coding and collaboration.</p>
                <p>As a recent graduate, I am eager to take on new challenges that push my creativity and technical prowess. My mission is to design and develop <strong>cutting-edge, user-friendly web applications</strong> that not only solve problems but also deliver memorable user experiences. I'm particularly excited to explore <strong>full-stack development</strong> and leverage <strong>emerging technologies</strong> to create innovative solutions that make a meaningful impact.</p>
                <p>Looking to the future, I envision collaborating with dynamic teams to bring ambitious ideas to life. My goal is to bridge the gap between creativity and technology, transforming concepts into reality and making the digital world <strong>more accessible, engaging, and impactful</strong>.</p>
                <p>Joining your company would be a dream come true. I am confident that my <strong>collaborative mindset, unwavering dedication, and innovative thinking</strong> will enable me to contribute significantly to your team’s success. Together, I believe we can create extraordinary projects while continually striving for excellence.</p>
                <p><strong>Let’s build the future together!</strong></p>

                <div style={{ paddingTop: "40px" }}><Button text="Get My Resume" link="https://drive.google.com/drive/folders/1bXxzmCD6O_RjOSObV9xm8n3PyD8R_RW7" /></div>
              </div>
              <div className="story-right">
                <h3>"Sharing My Journey, So You Might See Fragments of Your Own"</h3>
                <img src="/images/g-1.png" alt="Gaurav Mahavar Story Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="responsive">
          <div className="section-2">
            <div className='pad' style={{ display: "flex", paddingTop: "200px" }}>
              <div className="workflow-container">
                <div className="workflow-left">
                  <h2>My Workflow</h2>
                  <img src="/images/left-downarrow.png" alt="" />
                </div>
                <div className="workflow-right">
                  <ol>
                    <li>Understanding Requirements</li>
                    <hr />
                    <li>Discussing Deadlines and Constraints</li>
                    <hr />
                    <li>Planning and Designing</li>
                    <hr />
                    <li>Development and Coding</li>
                    <hr />
                    <li>Testing and Refinement</li>
                    <hr />
                    <li>Support and Scalability</li>
                    <hr />
                  </ol>
                </div>
              </div>

              <div className="Myskills">
                <div><h3>My-Skills</h3></div>
                <div className='skills-icon'>
                  <img src="/images/Html.png" alt="" /><p>HMTL</p>
                  <img src="/images/css-icon.png" alt="" /><p>CSS</p>
                  <img src="/images/js-icon.png" alt="" /><p>JavaScript</p>
                  <img src="/images/react-icon.png" alt="" /><p>React.js</p>
                  <img src="/images/tailwind-icon.png" alt="" /><p>Tailwind</p>
                  <img src="/images/npm-icon.png" alt="" /><p>Npm</p>
                  <img src="/images/python-icon.png" alt="" /><p>Python</p>
                  <img src="/images/git-icon.png" alt="" /><p>Git</p>
                  <img src="/images/vscode-icon.png" alt="" /><p>Vscode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="section-2"><Footer /></div>
    </div>
  )
}

export default About
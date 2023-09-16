import React from 'react'
import './Herosection.css'
import { Container, Row, Col } from 'reactstrap'
import { Fade, Slide } from "react-awesome-reveal";
import Resume from '../../Assets/Resume.pdf'
import { Link } from 'react-scroll';
// import MyImg from '../../Assets/photo.png'

const Herosection = () => {



  return <section className="hero-section" id='home'>
    <Container id='hero-container'>
      <Row id='hero-container-row'>
        <Col lg={6} md={6} sm={12}>
          <div className="hero-content justify-content-lg-start" style={{ overflow: 'hidden' }}>

            <Fade><h1 className='salut'>Hi, I'm</h1></Fade>
            <Slide delay={1e2}>
              <h1 className='name'><span>Ayush  Mishra</span></h1>
              <p className='desc'>Full Stack Developer and  AI Enthusiast.</p>
            </Slide>
            <Fade delay={1e3} cascade>
              <p className='desc-more justify-content-around'>Welcome to my portfolio website! I am a passionate full stack developer with a strong interest in artificial intelligence. I enjoy exploring cutting-edge algorithms and techniques to solve complex problems. Check out my resume to learn more about my work.</p>
            </Fade>
            <div className="hero-btn d-flex align-items-center gap-4 ">
              <button className="btn">
                <a href={Resume} download="Ayush Resume">My Resume</a>
              </button>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn">Get in Touch</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Slide direction='right' duration={2000}>
            <div className="hero-image">
              {/* <img src={MyImg} alt="" className='w-100 myimg' /> */}
            </div>
          </Slide>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Herosection;

import React from 'react'
import './About.css'
import { Container, Row, Col } from 'reactstrap'
// import { MdSchool } from "react-icons/md";

const About = () => {
    return <section id="about">
        <Container>
            <Row>
                <Col md="6" lg="12" className='mb-5 d-flex'>
                    <h1>About Me</h1>
                </Col>
                <Col md="3" lg="4"  className='d-flex flex-row fl'>
                    <div className="about-container">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>Me</h2>
                                <p>I am a 3rd year BTECH Computer Science student. I am passionate about exploring the exciting and ever-evolving world of technology and its endless possibilities. I have a constant eagerness to embrace novel experiences and expand my knowledge.</p>
                            </div>
                        </div>
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>My Interests</h2>
                                <ul>
                                    <li>Artificial Intelligence & Machine Learning</li>
                                    <li>Data Analytics</li>
                                    <li>Natural Language Processing</li>
                                    {/* <li>Deep Learning</li> */}
                                    <li>Web Development</li>
                                    <li>Internet of Things</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>My Leisure Pursuit</h2>
                                <ul>
                                    <li>Sketching</li>
                                    <li>Coding</li>
                                    <li>Reading Books</li>
                                    <li>Listening Music</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default About

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Zoom } from 'react-awesome-reveal'
import '../Skills/Skills.css'
import Java from '../../Assets/Skill/java.svg'
import Python from '../../Assets/Skill/python.svg'
import JS from '../../Assets/Skill/js.svg'
import Node from '../../Assets/Skill/nodejs.svg'
import Express from '../../Assets/Skill/express.svg'
import Reactjs from '../../Assets/Skill/react.svg'
import Tailwindcss from '../../Assets/Skill/tailwindcss.svg'
import MongoDB from '../../Assets/Skill/mongodb.svg'

const Skills = () => {
  return <section className='skills-section d-flex mb-5' id="skills">
    <Container>
      <Row>
        <Col md="6" lg="12" className='mb-5 d-flex'>
          <h1>Skills</h1>
        </Col>
        <Col className='mt-3 mb-4 d-flex justify-content-between skill-container'>
          <Zoom cascade damping={0.1}>
            <div className='d-flex mb-3'>
              <img src={Java} alt='Java' height={80} />
            </div>
            <div className='d-flex mb-3'>
              <img src={Python} alt="Python" height={75} />
            </div>
            <div className='d-flex mb-3'>
              <img src={JS} alt="JavaScript" height={80} />
            </div>
            <div className='d-flex mb-3'>
              <img src={Reactjs} alt="React.js" height={80} />
            </div>
            <div className='d-flex mb-3'>
              <img src={Node} alt="node.js" height={80} />
            </div>
            <div className='d-flex mb-3'>
              <img src={Express} alt="express.js" height={80} />
            </div>
            <div className='d-flex mb-3'>
              <img src={Tailwindcss} alt="tailwindcss" height={80} />
            </div>
            <div className='d-flex mb-3 pt-3'>
              <img src={MongoDB} alt="MongoDB" height={50} />
            </div>
          </Zoom>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Skills

import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import HeroPic from '../assets/img/hero-img.png'
import CV from '../assets/files/sazon-johnleviticus-cv.pdf'
import '../styles/Hero.scss'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
    <section id="hero">
      <Container className="hero-section">
        <Row>

          

          <Col lg="7">
            <div className="img-holder">
              <img src={HeroPic} alt="levi sazon img" />
            </div>
          </Col>
          <Col lg="5">
            <header>
              <h2>Hi, I am</h2>
              <h1>Levi Sazon</h1>
              <h4>Full Stack Web Developer</h4>
              <Button className="dl-btn" variant="dark" href={CV} download="Sazon-JohnLeviticus-CV.pdf" target="_blank"><span>Download CV</span></Button>{' '}
            </header>

            <div className="icons">
              <a href="mailto:johnleviticus.sazon@gmail.com?body=Message here" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/levisaz" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/john-leviticus-levi-s-6b0831106/" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
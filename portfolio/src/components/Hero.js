import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import HeroPic from '../img/hero-img.JPG'
import '../styles/Hero.scss'
const Hero = () => {
  return (
    <div id="hero">
      <Container className="hero-section">
        <Row>

          <Col lg="4">
            <header>
              <h2>Hi, I am</h2>
              <h1>John Leviticus Sazon</h1>
              <h3>Full Stack Web Developer</h3>
            </header>
          </Col>

          <Col lg="8">
            <div className="img-holder">
              <img src={HeroPic} alt="levi sazon img" />
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Hero
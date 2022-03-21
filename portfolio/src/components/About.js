import React from 'react'
import '../styles/About.scss'

import {Container, Row} from 'react-bootstrap'
const About = () => {
  return (
    <section className="" id="about">
      <Container className="about-section d-flex justify-content-center">
        <Row>
          <div className="section-title"><h2>About Me</h2></div>
          <div className="about-p pt-5"><p>Hi, I am <span className="text-light font-weight-bold">John Leviticus Sazon</span>, 22 years of age, currently residing in Hermosa, Bataan, Philippines. I am a 4th year student at the University of Santo Tomas working towards a Bachelor of Science degree in Information Technology. I am a hardworking and resourceful individual commended for first-rate collaboration and time management abilities. Commited to developing a career path and expanding work experience. Strong knowledge of Web Development</p>
          </div>
          <div className="education">
            <h3>Educational Attainment</h3>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default About
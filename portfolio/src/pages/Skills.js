import React from 'react'
import '../styles/Skills.scss'
import { Container, Row} from 'react-bootstrap'
const Skills = () => {
  return (
    <section id="skills">
      <Container className="about-section d-flex justify-content-center">
        <Row>
        <div className="section-title"><h2>Skills</h2></div>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
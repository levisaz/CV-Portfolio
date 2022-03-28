import React from 'react'
import '../styles/Projects.scss'
import { Container, Row} from 'react-bootstrap'

const Projects = () => {
  return (
    <section id="projects">
    <Container className="about-section d-flex justify-content-center">
        <Row>
        <div className="section-title"><h2>Projects</h2></div>
        </Row>
      </Container>
      </section>
  )
}

export default Projects
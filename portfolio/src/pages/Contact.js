import React from 'react'
import '../styles/Contact.scss'
import { Container, Row} from 'react-bootstrap'

const Contact = () => {
  return (
    <section id="contact">
      <Container className="about-section d-flex justify-content-center">
        <Row>
        <div className="section-title"><h2>Contact Me</h2></div>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

import '../styles/NavBar.scss'
const NavBar = () => {
  return (
    
    <>
      <Navbar variant="dark" expand="lg" sticky="top">
          <Container className="mx-auto">
            
            <Navbar.Brand href="/">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              
                <Nav.Link href="#hero">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </>      
    
  )
}

export default NavBar
import React, { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../styles/NavBar.scss'
const NavBar = () => {
  
  // remove bg on scroll
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navControl = () => {
    
    if (typeof window!== 'undefined'){
      //if scroll down hide
      if (window.scrollY < lastScrollY) {
        setShow(false)
      } else { // if scroll up show
        setShow(true)
      }

      //set current page location for next move
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined'){
      window.addEventListener('scroll', navControl)

      //cleanup function
      return () => {
        window.removeEventListener('scroll', navControl)
      }
    }

  }, [lastScrollY])

  
  
  return (
    
    <>
      <Navbar variant="dark" expand="lg" sticky="top" id="navbar" className={`shadow-5-strong active ${show && 'hidden'}`}>
          <Container className="mx-auto">
            
            <Navbar.Brand href="#hero">John Leviticus Sazon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              
                <Nav.Link href="#hero">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills" className={`${show}`}>Skills</Nav.Link>
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
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import ReactLogo from '../logo.svg'

import '../styles/NavBar.scss'
const NavBar = () => {
  return (
    
    <>
      <Navbar variant="dark" expand="lg" sticky="top">
          <Container>
            
            <Navbar.Brand href="/"><img src={ReactLogo} alt="React Logo" style={{width: '3rem', height:'3rem'}}/>Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/page2">Page 2</Link>
                  <Link className="nav-link" to="/page3">Page 3</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Outlet/>
    </>      
    
  )
}

export default NavBar
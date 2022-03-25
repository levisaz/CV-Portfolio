import React from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";
import '../styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <MDBFooter className="font-small mt-auto py-5">
      <MDBContainer fluid className="text-center">
        <MDBContainer fluid className="icons mb-3">
          {/* icons */}
          <a className="icon-holder" href="https://github.com/levisaz" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="icon-holder" href="https://github.com/levisaz" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="icon-holder" href="https://github.com/levisaz" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          
        </MDBContainer>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} John Leviticus Sazon
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
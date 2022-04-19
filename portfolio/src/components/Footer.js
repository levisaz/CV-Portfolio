import React from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";
import '../styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <MDBFooter className="font-small mt-auto">
      <MDBContainer fluid className="text-center">
        <MDBContainer fluid className="icons mb-3">
          <a href="mailto:johnleviticus.sazon@gmail.com?body=Message here" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/levisaz" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/john-leviticus-levi-s-6b0831106/" target="_blank" rel="noreferrer" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} />
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
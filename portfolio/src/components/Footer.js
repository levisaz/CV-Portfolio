import React from 'react'
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          {/* icons */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: John Leviticus Sazon
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
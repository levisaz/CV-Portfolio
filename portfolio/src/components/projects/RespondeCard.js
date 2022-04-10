import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Login from '../../assets/img/projects/responde/web/login.png'
import Dashboard from '../../assets/img/projects/responde/web/dashboard.png'
import Forgot from '../../assets/img/projects/responde/web/forgot password.png'
import Profile from '../../assets/img/projects/responde/web/profile.png'
import UpdateEmail from '../../assets/img/projects/responde/web/update email.png'
import UpdatePass from '../../assets/img/projects/responde/web/update password.png'
import Reset from '../../assets/img/projects/responde/web/reset-password.png'
import Incoming from '../../assets/img/projects/responde/web/incomingreport.png'
import IncomingView from '../../assets/img/projects/responde/web/incoming-view.png'
import IncomingRespond from '../../assets/img/projects/responde/web/incoming-respond.png'
import IncomingDecline from '../../assets/img/projects/responde/web/incoming-decline.png'
import History from '../../assets/img/projects/responde/web/reporthistory.png'
import HistoryView from '../../assets/img/projects/responde/web/history-view.png'
import IncidentNew from '../../assets/img/projects/responde/web/incident-new.png'
import IncidentView from '../../assets/img/projects/responde/web/incident-view.png'
import Incident from '../../assets/img/projects/responde/web/incidentreports.png'
const RespondeCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Login}
            title = "Capstone: RESPONDE"
            role="Web Frontend Developer"
            text = "A web and mobile application (collaborated with web app only) created for the purpose of minimizing the time response of fire fighters. The web app is the admin side that manages the reports that were sent from the mobile application."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Capstone: RESPONDE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>The web application is used to manage incoming reports and has the option to mark them responded or not. The admin can also create a report by exporting single or group reports to csv file.</p>
            Technologies:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>AngularJS</li>
                    <li>Firebase Realtime Database</li>
                    <li>Google Maps API</li>
                </ul> 
            Features:
                <ul>
                    <li>Login/Forgot Password</li>
                    <li>CRUD Functionalities</li>
                    <li>Export data to CSV file</li>
                    <li>Send sms message to registered numbers after clicking Respond button in the report</li>
                </ul>
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Login}
                        alt="1st slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Forgot}
                        alt="2nd slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Reset}
                        alt="3rd slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Dashboard}
                        alt="4th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Profile}
                        alt="5th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={UpdateEmail}
                        alt="6th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={UpdatePass}
                        alt="7th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Incoming}
                        alt="8th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingView}
                        alt="9th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingRespond}
                        alt="10th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingDecline}
                        alt="11th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={History}
                        alt="12th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={HistoryView}
                        alt="13th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Incident}
                        alt="14th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncidentView}
                        alt="15th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncidentNew}
                        alt="16th slide"
                        />
                    </Carousel.Item>

                </Carousel>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default RespondeCard
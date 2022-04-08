import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import Login from '../assets/img/projects/responde/web/login.png'
import Dashboard from '../assets/img/projects/responde/web/dashboard.png'
import Forgot from '../assets/img/projects/responde/web/forgot password.png'
import Profile from '../assets/img/projects/responde/web/profile.png'
import UpdateEmail from '../assets/img/projects/responde/web/update email.png'
import UpdatePass from '../assets/img/projects/responde/web/update password.png'
import Reset from '../assets/img/projects/responde/web/reset-password.png'
import Incoming from '../assets/img/projects/responde/web/incomingreport.png'
import IncomingView from '../assets/img/projects/responde/web/incoming-view.png'
import IncomingRespond from '../assets/img/projects/responde/web/incoming-respond.png'
import IncomingDecline from '../assets/img/projects/responde/web/incoming-decline.png'
import History from '../assets/img/projects/responde/web/reporthistory.png'
import HistoryView from '../assets/img/projects/responde/web/history-view.png'
import IncidentNew from '../assets/img/projects/responde/web/incident-new.png'
import IncidentView from '../assets/img/projects/responde/web/incident-view.png'
import Incident from '../assets/img/projects/responde/web/incidentreports.png'
const RespondeCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Login}
            title = "Capstone: RESPONDE"
            role="Web Frontend Developer"
            text = "A web and mobile application (collaborated with web app only). Has login and forgot password functionalities and CRUD functionalities. This app was developed using AngularJS framework for the frontend and backend development, and MongoDB for the database."
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
                    <li>Send sms message after clicking Respond button in the report</li>
                </ul>
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Login}
                        alt="First slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Forgot}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Reset}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Dashboard}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Profile}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={UpdateEmail}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={UpdatePass}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Incoming}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingView}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingRespond}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncomingDecline}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={History}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={HistoryView}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Incident}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncidentView}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={IncidentNew}
                        alt="Third slide"
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
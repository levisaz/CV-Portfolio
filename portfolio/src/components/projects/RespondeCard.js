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

const info = [
    {
        src : Login,
        title : "Capstone: RESPONDE",
        role:"Web Frontend Developer",
        text : "A web and mobile application (collaborated with web app only) created for the purpose of minimizing the time response of fire fighters. The web app is the admin side that manages the reports that were sent from the mobile application.",
        modal_body: 'The web application is used to manage incoming reports and has the option to mark them responded or not. The admin can also create a report by exporting single or group reports to csv file.'
    }
]
const images = [
    {
        src: Login,
        alt: "Login img"
    },
    {
        src: Dashboard,
        alt: "Dashboard img"
    },
    {
        src: Forgot,
        alt: "Forgot img"
    },
    {
        src: Profile,
        alt: "Profile img"
    },
    {
        src: UpdateEmail,
        alt: "UpdateEmail img"
    },
    {
        src: UpdatePass,
        alt: "UpdatePass img"
    },
    {
        src: Reset,
        alt: "Reset img"
    },
    {
        src: Incoming,
        alt: "Incoming img"
    },
    {
        src: IncomingView,
        alt: "IncomingView img"
    },
    {
        src: IncomingRespond,
        alt: "IncomingRespond img"
    },
    {
        src: IncomingDecline,
        alt: "IncomingDecline img"
    },
    {
        src: History,
        alt: "History img"
    },
    {
        src: HistoryView,
        alt: "HistoryView img"
    },
    {
        src: IncidentNew,
        alt: "IncidentNew img"
    },
    {
        src: IncidentView,
        alt: "IncidentView img"
    },
    {
        src: Incident,
        alt: "Incident img"
    },
]

const RespondeCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        {info.map(data => (
            <>
        <ProjectCard 
            src = {data.src}
            title = {data.title}
            role={data.role}
            text = {data.text}
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>{data.modal_body}</p>
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

                {images.map(imgs => (
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src = {imgs.src}
                                alt = {imgs.alt}
                            />
                        </Carousel.Item>
                    ))}

                </Carousel>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
        </>
                ))}
    </>
  )
}

export default RespondeCard
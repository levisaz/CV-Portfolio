import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Game from '../../assets/img/projects/react-aim/game.png'
import GameOver from '../../assets/img/projects/react-aim/gameover.png'
import Home from '../../assets/img/projects/react-aim/home.png'

const ReactAimCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Game}
            title = "Aim Game"
            role="Developer"
            text = "A simple game that requires the user to aim and click on the target."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Kiddie Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>A web application that utilizes ReactJS' useState hook. The user's score will be tallied throughout the game and </p>
            Technologies:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                    <li>HowlerJS</li>
                </ul> 
            
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Home}
                        alt="First slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Game}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={GameOver}
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

export default ReactAimCard
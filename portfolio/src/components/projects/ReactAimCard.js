import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Game from '../../assets/img/projects/react-aim/game.png'
import GameOver from '../../assets/img/projects/react-aim/gameover.png'
import Home from '../../assets/img/projects/react-aim/home.png'

const info = [
    {
        src : Game,
        title : "Aim Game",
        role:"Developer",
        text : "A simple web app game that requires the user to aim and click on the target.",
        modal_body: "A web application that utilizes ReactJS' useState hook. The user's score will be tallied throughout the game and displayed when the timer ends. HowlerJS is also implemented for the sound effect and background music."
    }
]
const images = [
    {
        src: Game,
        alt: "Game img"
    },
    {
        src: GameOver,
        alt: "GameOver img"
    },
    {
        src: Home,
        alt: "Home img"
    },
    
]

const ReactAimCard = () => {
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
                    <li>ReactJS</li>
                    <li>HowlerJS</li>
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

export default ReactAimCard
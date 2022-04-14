import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Home from '../../assets/img/projects/fightingkimmy/home.png'
import How from '../../assets/img/projects/fightingkimmy/how.png'
import Game from '../../assets/img/projects/fightingkimmy/game.png'
import Gameover1 from '../../assets/img/projects/fightingkimmy/gameover1.png'
import Gameover2 from '../../assets/img/projects/fightingkimmy/gameover2.png'




const JavaGameCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Game}
            title = "Greenfoot Game"
            role="Developer"
            text = "A game like Space Impact (mobile game from Nokia) which introduces a character from the mobile game Mobile Legends, Kimmy."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Fighting Kimmy!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Fighting Kimmy is a game developed using Greenfoot API (Java). The project consists of actors, colors, fonts, images, sounds, world, mouseinfo, and userinfo.</p>
            
            Technologies:
                <ul>
                    <li>Greenfoot API</li>
                    <li>Java</li>
                </ul>
            Features:
                <ul>
                    <li>Actors can move using W A S D keys or arrow keys.</li>
                    <li>Spacebar triggers the actor to fire a projectile.</li>
                    <li>The actor has a health bar and when it is turned to 0, the game will be over. Actors loses health when enemies pass or get hit by projectiles.</li>
                    <li>There is a boss at the end of each phase.</li>
                </ul>
            
                <hr />
                <Carousel interval={null} indicators={true}>

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
                        src={How}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Game}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Gameover1}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Gameover2}
                        alt="Fifth slide"
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

export default JavaGameCard
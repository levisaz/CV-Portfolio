import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Pg1 from '../../assets/img/projects/kiddiequiz/pg1.png'
import Pg2 from '../../assets/img/projects/kiddiequiz/pg2.jpg'
import Pg3 from '../../assets/img/projects/kiddiequiz/pg3.jpg'
import Pg4 from '../../assets/img/projects/kiddiequiz/pg4.jpg'
import Pg5 from '../../assets/img/projects/kiddiequiz/pg5.jpg'
import Pg6 from '../../assets/img/projects/kiddiequiz/pg6.jpg'
import Pg7 from '../../assets/img/projects/kiddiequiz/pg7.jpg'
import Pg8 from '../../assets/img/projects/kiddiequiz/pg8.jpg'
import Pg9 from '../../assets/img/projects/kiddiequiz/pg9.jpg'
import Pg10 from '../../assets/img/projects/kiddiequiz/pg10.jpg'
const QuizAppCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Pg1}
            title = "Kiddie Quiz"
            role="Developer"
            text = "A mobile application dedicated to educating children with a quiz. The app contains a variety of categories to choose from."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Kiddie Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>The mobile app contains basic onClick functionalities for the quiz and has content management system for creating quiz.</p>
            Technologies:
                <ul>
                    <li>Java</li>
                    <li>XML</li>
                    <li>Android Studio</li>
                </ul> 
            Features:
                <ul>
                    <li>Content Management System</li>
                    
                </ul>
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg1}
                        alt="First slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg4}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg5}
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg6}
                        alt="Sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg7}
                        alt="Seventh slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg8}
                        alt="Eighth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg9}
                        alt="Ninth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Pg10}
                        alt="Tenth slide"
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

export default QuizAppCard
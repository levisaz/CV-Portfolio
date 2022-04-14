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

const info = [
    {
        src : Pg1,
        title : "Kiddie Quiz",
        role:"Developer",
        text : "A mobile application dedicated to educating children with a quiz. The app contains a variety of categories to choose from.",
        modal_body: 'The mobile app contains basic onClick functionalities for the quiz and has content management system for creating quiz.'
    }
]
const images = [
    {
        src: Pg1,
        alt: "Pg1 img"
    },
    {
        src: Pg2,
        alt: "Pg2 img"
    },
    {
        src: Pg3,
        alt: "Pg3 img"
    },
    {
        src: Pg4,
        alt: "Pg4 img"
    },
    {
        src: Pg5,
        alt: "Pg5 img"
    },
    {
        src: Pg6,
        alt: "Pg6 img"
    },
    {
        src: Pg7,
        alt: "Pg7 img"
    },
    {
        src: Pg8,
        alt: "Pg8 img"
    },
    {
        src: Pg9,
        alt: "Pg9 img"
    },
    {
        src: Pg10,
        alt: "Pg10 img"
    },
    
]


const QuizAppCard = () => {
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

export default QuizAppCard
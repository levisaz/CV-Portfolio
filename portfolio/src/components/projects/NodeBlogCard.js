import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Home from '../../assets/img/projects/nodejs-blog/home.png'
import Search from '../../assets/img/projects/nodejs-blog/search.png'
import View from '../../assets/img/projects/nodejs-blog/view.png'


const NodeBlogCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Home}
            title = "Blog Website"
            role="Full Stack Developer"
            text = "A blog website with CRUD functionalities."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Blog Website</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>A web application that utilizes NodeJS, EJS, and MongoDB. The app has the CRUD functionalities that are tied to the database.</p>
            Technologies:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>EJS</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                </ul> 
            Features:
                <ul>
                    <li>Create, Read, Update, Delete blogs</li>
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
                        src={Search}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={View}
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

export default NodeBlogCard
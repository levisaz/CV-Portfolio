import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Home from '../../assets/img/projects/nodejs-blog/home.png'
import Search from '../../assets/img/projects/nodejs-blog/search.png'
import View from '../../assets/img/projects/nodejs-blog/view.png'

const info = [
    {
        src : Home,
        title : "Blog Website",
        role:"Full Stack Developer",
        text : "A blog website with CRUD functionalities.",
        modal_body: 'A web application that utilizes NodeJS, EJS, and MongoDB. The app has the CRUD functionalities that are tied to the database.'
    }
]
const images = [
    {
        src: Home,
        alt: "Home img"
    },
    {
        src: Search,
        alt: "Search img"
    },
    {
        src: View,
        alt: "View img"
    },
    
]

const NodeBlogCard = () => {
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

export default NodeBlogCard
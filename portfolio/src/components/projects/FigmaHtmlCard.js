import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Hero from '../../assets/img/projects/figma-html/hero.png'
import Hero2 from '../../assets/img/projects/figma-html/hero2.png'
import Services from '../../assets/img/projects/figma-html/services.png'
import Quote from '../../assets/img/projects/figma-html/quote.png'
import Footer from '../../assets/img/projects/figma-html/footer.png'



const FigmaHtmlCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Hero}
            title = "Figma Design to HTML"
            role="Web Frontend Developer"
            text = "A project that aims to replicate the figma design into an html static website."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Figma Design to HTML</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>A static website that showcases my ability to replicate a design. The website is partially responsive on all devices.
            <br/>

            <a href="https://www.figma.com/proto/XKKDNFW8YRriskg7LPX6vJ/TELUS?node-id=1%3A430">Figma link</a></p>
            
            Technologies:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                </ul> 
            
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Hero}
                        alt="First slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Hero2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Services}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Quote}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={Footer}
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

export default FigmaHtmlCard
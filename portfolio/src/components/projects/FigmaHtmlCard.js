import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Hero from '../../assets/img/projects/figma-html/hero.png'
import Hero2 from '../../assets/img/projects/figma-html/hero2.png'
import Services from '../../assets/img/projects/figma-html/services.png'
import Quote from '../../assets/img/projects/figma-html/quote.png'
import Footer from '../../assets/img/projects/figma-html/footer.png'

const info = [
    {
        src : Hero,
        title : "Figma Design to HTML",
        role:"Web Frontend Developer",
        text : "A project that aims to replicate the figma design into an html static website.",
        modal_body: 'A static website that showcases my ability to replicate a design. The website is partially responsive on all devices.'
    }
]
const images = [
    {
        src: Hero,
        alt: "Hero img"
    },
    {
        src: Hero2,
        alt: "Hero2 img"
    },
    {
        src: Services,
        alt: "Services img"
    },
    {
        src: Quote,
        alt: "Quote img"
    },
    {
        src: Footer,
        alt: "Footer img"
    },
]

const FigmaHtmlCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    setFullscreen(true);
    }
    const [fullscreen, setFullscreen] = useState(true);
  
  

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
        <Modal fullscreen={fullscreen} show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>{data.modal_body}
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

export default FigmaHtmlCard
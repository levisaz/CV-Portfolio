import React, { useState} from 'react'
import { Button, Modal} from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import Login from '../assets/img/projects/responde/web/login.png'
const RespondeCard = () => {
    const [show1, setShow] = useState(false);
  const handleShow1 = () => setShow(!show1);
  return (
    <>
        <ProjectCard 
            src = {Login}
            title = "Capstone: RESPONDE"
            text = "lorem ipsum"
            click = {handleShow1}
            />
            <Modal show={show1} onHide={handleShow1}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShow1}>
                    Close
                </Button>
                <Button onClick={handleShow1}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default RespondeCard
import React, { useState} from 'react'
import { Button, Modal, Carousel} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import Login from '../../assets/img/projects/hulya&marias/login.png'
import Dashboard from '../../assets/img/projects/hulya&marias/dashboard.png'
import Products from '../../assets/img/projects/hulya&marias/products.png'
import CreateProduct from '../../assets/img/projects/hulya&marias/products-create.png'
import EditProduct from '../../assets/img/projects/hulya&marias/products-edit.png'
import DeleteProduct from '../../assets/img/projects/hulya&marias/products-delete.png'
import Orders from '../../assets/img/projects/hulya&marias/orders.png'
import Status from '../../assets/img/projects/hulya&marias/status.png'
import DeleteOrder from '../../assets/img/projects/hulya&marias/delete-order.png'
import Profile from '../../assets/img/projects/hulya&marias/profile.png'
import EditProfile from '../../assets/img/projects/hulya&marias/edit-profile.png'
import EditPassword from '../../assets/img/projects/hulya&marias/edit-password.png'
import AdminEmail from '../../assets/img/projects/hulya&marias/admin-email.png'
import UserOrderEmail from '../../assets/img/projects/hulya&marias/userorder-email.png'
const HulyaAndMariasCard = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
        <ProjectCard 
            src = {Dashboard}
            title = "Hulya and Maria's Kitchenette"
            role="Web Backend Developer"
            text = "A project for software engineering course in UST. It is a web e-commerce application for the business of Hulya and Maria's Kitchenette. The users can view and order through the website and the admin handles the orders and can modify products data."
            click = {handleShow}
        />
        <Modal size="xl" show={show} onHide={handleShow} >
            <Modal.Header closeButton >
            <Modal.Title>Hulya and Maria's Kitchenette</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>The web app is developed using the MERN Stack or using MongoDB, Express, ReactJS, and NodeJS. Has basic CRUD functionalities, content management system, and automated email service. It was also deployed using Heroku.</p>
            Technologies:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Nodemailer</li>
                    <li>Cloudinary</li>
                    <li>Mongoose</li>
                    <li>Postman</li>
                    <li>Heroku</li>
                </ul> 
            Features:
                <ul>
                    <li>Login/Forgot Password</li>
                    <li>CRUD Functionalities</li>
                    <li>Auto generated emails</li>
                </ul>
                <hr />
                <Carousel variant="dark" interval={null} indicators={true}>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Login}
                        alt="1st slide"
                        />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Dashboard}
                        alt="2nd slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Products}
                        alt="3rd slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={CreateProduct}
                        alt="4th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={EditProduct}
                        alt="5th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={DeleteProduct}
                        alt="6th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Orders}
                        alt="7th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Status}
                        alt="8th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={DeleteOrder}
                        alt="9th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Profile}
                        alt="10th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={EditProfile}
                        alt="11th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={EditPassword}
                        alt="12th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={AdminEmail}
                        alt="13th slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={UserOrderEmail}
                        alt="14th slide"
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

export default HulyaAndMariasCard
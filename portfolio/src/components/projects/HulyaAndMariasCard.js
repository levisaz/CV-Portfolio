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

const info = [
    {
        src : Dashboard,
        title : "Hulya and Maria's Kitchenette",
        role:"Web Backend Developer",
        text : "A project for software engineering course in UST. It is a web e-commerce application for the business of Hulya and Maria's Kitchenette. The users can view and order through the website and the admin handles the orders and can modify products data.",
        modal_body: 'The web app is developed using the MERN Stack or using MongoDB, Express, ReactJS, and NodeJS. Has basic CRUD functionalities, content management system, and automated email service. It was also deployed using Heroku.'
    }
]
const images = [
    {
        src: Login,
        alt: "Login img"
    },
    {
        src: Dashboard,
        alt: "Dashboard img"
    },
    {
        src: Products,
        alt: "Products img"
    },
    {
        src: CreateProduct,
        alt: "CreateProduct img"
    },
    {
        src: EditProduct,
        alt: "EditProduct img"
    },
    {
        src: DeleteProduct,
        alt: "DeleteProduct img"
    },
    {
        src: Orders,
        alt: "Orders img"
    },
    {
        src: Status,
        alt: "Status img"
    },
    {
        src: DeleteOrder,
        alt: "DeleteOrder img"
    },
    {
        src: Profile,
        alt: "Profile img"
    },
    {
        src: EditProfile,
        alt: "EditProfile img"
    },
    {
        src: EditPassword,
        alt: "EditPassword img"
    },
    {
        src: AdminEmail,
        alt: "AdminEmail img"
    },
    {
        src: UserOrderEmail,
        alt: "UserOrderEmail img"
    },
]
const HulyaAndMariasCard = () => {
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

export default HulyaAndMariasCard
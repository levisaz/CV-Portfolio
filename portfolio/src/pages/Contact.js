import React, { useRef } from 'react'
import '../styles/Contact.scss'
import { Container, Row, Form, Button, FloatingLabel} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const notify = () => toast.success("Email sent successfully!",{ 
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_template', form.current, 'bfpZYmBcrJZdN1cVZ')
      .then((result) => {
          notify()
          form.current.reset()
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  

  return (
    <section id="contact">
      <Container data-aos="zoom-in" className="about-section d-flex justify-content-center flex-column">
        <Row>
        <div className="section-title text-center"><h2>Contact Me</h2></div>
        <p className="d-flex justify-content-center mt-5">Any questions or remarks? Just write me a message!</p>
        </Row>

        <Row className="mt-3 mb-5 justify-content-center">
            
            <Form ref={form} onSubmit={sendEmail} className='contact-form'>

            
              <Form.Group className="mb-5" controlId="name">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                  
                >
                <Form.Control type="text" name="from_name" placeholder="John Doe" required={true} />
                </FloatingLabel>
                
              </Form.Group>

              <Form.Group className="mb-5" controlId="email">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="example@gmail.com" name="email" required={true} />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-5" controlId="subject">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Subject"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Subject" name="subject" required={true} />
                </FloatingLabel>
              </Form.Group>
              
              <Form.Group className="mb-5" controlId="message">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Message"
                  className="mb-3"
                >
                <Form.Control as="textarea" type="text" placeholder="Input message here" name="message" required={true} />
                </FloatingLabel>
              </Form.Group>

              <Button type="submit">
                Send
              </Button>
            </Form>
          
        </Row>
        <ToastContainer />
      </Container>
    </section>
  )
}

export default Contact
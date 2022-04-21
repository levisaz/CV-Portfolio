import React, { useState} from 'react'
import '../styles/Projects.scss'
import '../styles/Modal.scss'
import { Container, Row} from 'react-bootstrap'
import RespondeCard from '../components/projects/RespondeCard'
import KiddieQuizCard from '../components/projects/QuizAppCard'
import ReactAimCard from '../components/projects/ReactAimCard'
import NodeBlogCard from '../components/projects/NodeBlogCard'
import FigmaHtmlCard from '../components/projects/FigmaHtmlCard'
import HulyaAndMariasCard from '../components/projects/HulyaAndMariasCard'
import JavaGameCard from '../components/projects/JavaGameCard'
const Projects = () => {

  const [show, setShow] = useState(false)

  const showToggler = () => {
    setShow(!show)
  }

  return (
    <section id="projects" className={show ? 'section-layout' : null}>
    <Container data-aos="zoom-in" fluid className='project-section'>
        <Row>
          <div className="section-title"><h2>Projects</h2></div>

        </Row>

        <Row className="projectList mt-3">

            <RespondeCard />
            <HulyaAndMariasCard />
            
            <div className="showToggler mt-3 d-flex justify-content-center">
              <button className={show? 'hide': "btn mt-3 mb-5"} onClick={showToggler}>Show All</button>
            </div>

            
        {show? 
        <>
          <NodeBlogCard />
          <ReactAimCard />
          <FigmaHtmlCard />
          <JavaGameCard />
          <KiddieQuizCard />
        
        <div className="showToggler mt-3 d-flex justify-content-center">
        <button className="btn mb-5" onClick={showToggler}>See Less</button>
      </div>
        </>
        : null}
            
        </Row>
        
      </Container>
      </section>
  )
}

export default Projects
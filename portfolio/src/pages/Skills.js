import React from 'react'
import '../styles/Skills.scss'
import { Container, Row} from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HTML from '../assets/img/skills/html.png'
import CSS from '../assets/img/skills/css.png'
import BOOTSTRAP from '../assets/img/skills/bootstrap.png'
import JS from '../assets/img/skills/js.png'
import REACT from '../assets/img/skills/react.png'
import NODE from '../assets/img/skills/node.png'
import SASS from '../assets/img/skills/sass.png'
import MONGODB from '../assets/img/skills/mongodb.png'
import FIREBASE from '../assets/img/skills/firebase.png'
import ANGULAR from '../assets/img/skills/angular.png'
import JAVA from '../assets/img/skills/java.png'
const Skills = () => {

  const skills = [
    {
      image: HTML,
      alt: "Html 5 logo",
      title: "HTML"
    },
    {
      image: CSS,
      alt: "CSS logo",
      title: "CSS"
    },
    {
      image: JS,
      alt: "JS logo",
      title: "JAVASCRIPT"
    },
    {
      image: BOOTSTRAP,
      alt: "BOOTSTRAP logo",
      title: "BOOTSTRAP"
    },
    {
      image: SASS,
      alt: "SASS logo",
      title: "SASS"
    },
    {
      image: REACT,
      alt: "REACT logo",
      title: "REACT"
    },
    {
      image: ANGULAR,
      alt: "ANGULAR logo",
      title: "ANGULAR"
    },
    {
      image: NODE,
      alt: "NODE logo",
      title: "NODE"
    },
    {
      image: JAVA,
      alt: "JAVA logo",
      title: "JAVA"
    },
    {
      image: MONGODB,
      alt: "MONGODB logo",
      title: "MONGODB"
    },
    {
      image: FIREBASE,
      alt: "FIREBASE logo",
      title: "FIREBASE"
    },

  ]

  return (
    <section id="skills">
      <Container className="skills-section">

        <Row className="d-flex justify-content-center">
          <div className="section-title"><h2>Skills</h2></div>

          <Row className="cardList">
          
            {skills.map((data) => (
              <>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    component="img"
                    image={data.image}
                    alt={data.alt}
                  />
                  <CardContent className="content-holder">
                    <Typography variant="h5" component="div" className="content">
                      {data.title}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            ))}


          </Row>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
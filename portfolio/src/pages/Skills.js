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
const Skills = () => {
  return (
    <section id="skills">
      <Container className="skills-section">

        <Row className="d-flex justify-content-center">
          <div className="section-title"><h2>Skills</h2></div>

          <Row className="cardList">
          
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={HTML}
                alt="Html 5 logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  HTML
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={CSS}
                alt="CSS logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  CSS
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={JS}
                alt="JS logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  JS
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={BOOTSTRAP}
                alt="BOOTSTRAP logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  BOOTSTRAP
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={SASS}
                alt="SASS logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  SASS
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={REACT}
                alt="REACT logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  REACT
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={ANGULAR}
                alt="ANGULAR logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  ANGULAR
                </Typography>
              </CardContent>
            </Card>
            
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={NODE}
                alt="NODEJS logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  NODEJS
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={MONGODB}
                alt="MONGODB logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  MONGODB
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                image={FIREBASE}
                alt="FIREBASE logo"
              />
              <CardContent className="content-holder">
                <Typography variant="h5" component="div" className="content">
                  FIREBASE
                </Typography>
              </CardContent>
            </Card>



          </Row>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
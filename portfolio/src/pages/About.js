import React from 'react'
import '../styles/About.scss'

import { Container, Row} from 'react-bootstrap'
import EducCard from '../components/EducCard'
import TELUS from '../assets/img/telus.png'
import UST from '../assets/img/ust-logo.png'
import JSISF from '../assets/img/jsisf-logo.png'

const About = () => {
  return (
    <section className="" id="about">
      <Container className="about-section d-flex justify-content-center">
        <Row>
          <div className="section-title"><h2>About Me</h2></div>
        
          <div className="about-p"><p>Hi, I am <span className="text-light font-weight-bold">John Leviticus Sazon</span>, 22 years of age, currently residing in Hermosa, Bataan, Philippines. I am a 4th year student at the University of Santo Tomas working towards a Bachelor of Science degree in Information Technology. I am a hardworking and resourceful individual commended for first-rate collaboration and time management abilities. Commited to developing a career path and expanding work experience. Strong knowledge of Web Development</p>
          </div>

          <div className="education row mt-5">
          <hr />
          <div className="col-12 col-lg-4 exp-title">
            <h3>Experience and Educational Attainment</h3>
          </div>
            <div className="col-12 col-lg-8">
              <div className="row educ">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div class="col ">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                  <div className="m-2">
                    <span class="badge badge-pill border exp-fill">&nbsp;</span>
                  </div>
                  <div className="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                </div>
                <div className="col py-2">
                    <EducCard
                      src={TELUS}
                      alt="TELUS logo"
                      title="TELUS Internation Inc., Philippines (OJT)"
                      subtitle="February 2022 - Present"
                      text="Telus International Digital Solutions: Full Stack Developer Intern"
                    />
                </div>
              </div>

              <div className="row educ">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                  <div className="m-2">
                    <span class="badge badge-pill border exp-fill">&nbsp;</span>
                  </div>
                  <div className="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                </div>
                <div className="col py-2">
                    <EducCard
                      src={UST}
                      alt="UST logo"
                      title="University of Santo Tomas (College)"
                      subtitle="August 2018 - Present"
                      text="Bachelor of Science in Information Technology"
                      text2 = "Dean's Lister 2019 - present"

                    />
                </div>
              </div>

              <div className="row educ">
                <div className="col-auto text-center flex-column d-none d-sm-flex">
                  <div className="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                  <div className="m-2">
                    <span class="badge badge-pill border ">&nbsp;</span>
                  </div>
                  <div className="row h-50">
                    <div class="col">&nbsp;</div>
                    <div class="col ">&nbsp;</div>
                  </div>
                </div>
                <div className="col py-2">
                    <EducCard
                      src={JSISF}
                      alt="JSISF logo"
                      title="Jesus Saves Integrated School Foundation (Secondary)"
                      subtitle="2010 - 2018"
                      text=""
                    />
                </div>
              </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default About
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import { Container, Row, Col, Button } from "reactstrap"
import ExperienceItem from "./ExperienceItem"
import { Fade, Zoom } from "react-reveal"

const Experience = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      file(name: { eq: "cga-portfolio" }) {
        childImageSharp {
          fluid(maxHeight: 380) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ExperienceContainer>
      <Container>
        <Row>
          <Col sm="12" md="4">
            <Fade left>
              <h1>As Front-End</h1>
              <ExperienceItem
                skillName="HTML5,CSS3 & ES2020"
                colors="rgba(246,74,29,1) 0%, rgba(1,167,221,1) 50%, rgba(247,214,0,1) 100%"
              />
              <ExperienceItem
                skillName="React,Gatsby & NextJs"
                colors="rgba(94,211,243,1) 0%, rgba(102,51,153,1) 50%, rgba(0,191,138,1) 100%"
              />
              <ExperienceItem
                skillName="UX and UI design"
                colors="rgba(251,61,18,1) 5%, rgba(255,188,41,1) 50%, rgba(163,11,127,1) 90%"
              />
              <ExperienceItem
                skillName="CSS Preprocss & Responsive Design"
                colors="rgba(235,59,148,1) 10%, rgba(54,147,206,1) 50%, rgba(51,51,51,1) 90%"
              />
              <ExperienceItem
                skillName="CMS's,Git, deployment & Control version"
                colors="rgba(255,255,255,1) 0%, rgba(36,41,46,1) 40%, rgba(36,41,46,1) 70%"
              />
            </Fade>
          </Col>
          <Col sm="12" md="4">
            <Fade top>
              <h1>As Back-End</h1>
              <ExperienceItem
                skillName="NodeJs & Deno Runtimes"
                colors="rgba(0,207,132,1) 10%, rgba(0,118,198,1) 50%, rgba(51,51,51,1) 90%"
              />
              <ExperienceItem
                skillName="Express,Hapi & SailsJs"
                colors="rgba(243,147,61,1) 10%, rgba(235,216,28,1) 50%, rgba(58,188,217,1) 90%"
              />
              <ExperienceItem
                skillName="Rest API,GraphQL & Serverless"
                colors="rgba(222,51,166,1) 10%, rgba(209,29,29,1) 50%, rgba(30,234,243,1) 90%"
              />
              <ExperienceItem
                skillName="Firebase,Docker & AWS"
                colors="rgba(246,190,0,1) 10%, rgba(35,145,230,1) 50%, rgba(244,160,35,1) 90%"
              />
              <ExperienceItem
                skillName="Unit,Functional & EndtoEnd Testing"
                colors="rgba(137,100,70,1) 10%, rgba(188,18,36,1) 50%, rgba(244,89,97,1) 90%"
              />
            </Fade>
          </Col>
          <Col sm="12" md="4">
            <Fade right>
              <h1>Latest Work</h1>
              <BackgroundImage
                fluid={pageQuery.file.childImageSharp.fluid}
                className="img-fluid w-100"
              >
                <a
                  href="https://portafolio.cgaautomation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-text">
                    <h1 className="text-center">CGA Portfolio</h1>
                    <p>
                      developing and maintaining complete digital identity with
                      presentation website, dynamic portfolio and email service
                      through rest api
                    </p>
                    <p>
                      The main technologies used to achieve this were vanilla
                      development, ReactJs, GraphQl and ExpressJs .
                    </p>
                  </div>
                </a>
              </BackgroundImage>
            </Fade>
          </Col>
          <Col sm="6">
            <a href="https://resume.io/r/Fx7B3prx0">
              <Fade bottom delay={1100}>
                <div className="d-flex justify-content-center">
                  <Button className="button w-100 w-md-75" outline>
                    <h1>Download CV!</h1>
                  </Button>
                </div>
              </Fade>
            </a>
          </Col>
          <Col sm="6">
            <Link to={"/portfolio"}>
              <Fade bottom delay={1100}>
                <div className="d-flex justify-content-center">
                  <Button className="button w-100 w-md-75" outline>
                    <h1>All Projects</h1>
                  </Button>
                </div>
              </Fade>
            </Link>
          </Col>
        </Row>
      </Container>
    </ExperienceContainer>
  )
}

const ExperienceContainer = styled.section`
  background-color: var(--raisin-black);
  padding: 5rem 2rem;

  h1 {
    text-shadow: var(--opal) 0px 0px 2px;
    font-weight: bold;
    font-size: 3.5rem;
  }

  p {
    font-size: 2rem;
    padding: 0rem 1.2rem;
    font-weight: bold;
  }

  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }

  .button {
    box-shadow: -1px 3px 4px var(--rose-bonbon);
    margin: 2rem 0rem;
    border-color: var(--opal);
    width: 70%;
    height: 6rem;
    border-radius: 0.8rem;
    transition: all 0.3s ease;
    h1 {
      font-weight: bold;
    }
  }
  .button:hover {
    background: var(--opal);
    box-shadow: -3px 4px 6px var(--rose-bonbon);
    transform: scale(1.05);
  }

  .bg-text {
    h1 {
      margin-top: 0.2rem;
      margin-bottom: 0rem;
    }
    padding: 2rem;
    background-image: linear-gradient(
      to top,
      rgba(34, 49, 53, 0.75),
      rgba(34, 49, 63, 0.8)
    );
    color: #fff;
    height: 100%;
    width: 100%;
    transition: all ease 0.3s;
  }

  .bg-text:hover {
    transform: scale(1.05);
  }
  .bg-text h1,
  p:hover {
    text-decoration: none !important;
  }
`

export default Experience

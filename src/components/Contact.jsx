import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Fade } from "react-reveal"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "contact" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imgFluid = data.file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={imgFluid}>
      <ContactContainer>
        <Container>
          <Row className="justify-content-around">
            <h1>Let's Work Together</h1>
            <Col md="6">
              <Fade left>
                <div className="form-container shadow-lg">
                  <form name="contact" method="POST" data-netlify="true">
                    <input
                      type="hidden"
                      name="form-name"
                      value="the-name-of-the-html-form"
                    />
                    <label>
                      <h3>What's your Name?</h3>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      required
                    />

                    <label>
                      <h3>And your Email?</h3>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      required
                    />
                    <label>
                      <h3>How can I help you?</h3>
                    </label>
                    <textarea
                      rows="4"
                      minlength="5"
                      maxlength="546"
                      name="subjet"
                      required
                    />
                    <button type="submit">Send!</button>
                  </form>
                </div>
              </Fade>
            </Col>
            <Col md="6">
              <Fade right>
                <ul>
                  <li>
                    <h2>
                      <span>&#9733;</span>I will be happy to answer you any
                      questions
                    </h2>
                  </li>

                  <li>
                    <h2>
                      <span>&#9733;</span>I will respond in less than 12h
                    </h2>
                  </li>

                  <li>
                    <h2>
                      <span>&#9733;</span>I will always be open to consider any
                      offer,proposition and recommendation
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <span>&#9733;</span>I will not share any information about
                      this form with anyone
                    </h2>
                  </li>
                </ul>
              </Fade>
            </Col>
          </Row>
        </Container>
      </ContactContainer>
    </BackgroundImage>
  )
}

const ContactContainer = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 53, 0.75),
    rgba(34, 49, 63, 0.8)
  );

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin: 2rem;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 2rem;
  }

  span {
    font-size: 4rem;
    margin-right: 1rem;
  }
  .form-container {
    background-color: var(--raisin-black);
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    padding: 1.5rem 3rem;
  }

  form {
    display: flex;
    flex-flow: column nowrap;

    h3 {
      text-align: center;
      font-weight: bold;
      font-size: 2.5rem;
      margin: 1.5rem 0rem;
      color: var(--opal);
    }

    input,
    textarea {
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      border: none;
      transition: all 0.3s ease;
      &:hover,
      active,
      focus {
        transform: scale(1.05);
        box-shadow: 0px 0px 8px var(--opal);
      }
    }

    button {
      margin: 2rem 0rem 2rem 0rem;
      padding: 0.8rem;
      background-color: var(--opal);
      border-radius: 0.2rem;
      border: none;
      color: var(--raisin-black);
      font-size: 3rem;
      font-weight: bold;
      box-shadow: 0px 1px 2px var(--opal);
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.08);
        background-color: var(--raisin-black);
        color: var(--opal);
        box-shadow: none;
        text-shadow: 0px 0px 3px var(--opal);
      }
    }
  }
`

export default Contact

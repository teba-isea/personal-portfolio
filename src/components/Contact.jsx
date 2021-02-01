import React from "react"
import styled from "@emotion/styled"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"

const Contact = () => {
  return (
    <ContactContainer>
      <Container>
        <Row className="justify-content-around">
          <h1>Let's Work Together</h1>
          <Col md="6">
            <div className="form-container">
              <form name="contact" method="POST" data-netlify="true">
                <label>
                  <h3>Name</h3>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  required
                />

                <label>
                  <h3>Email</h3>
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
          </Col>
          <Col md="6">
            <h2>from contact 2</h2>
          </Col>
        </Row>
      </Container>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  min-height: 98vh;
  background: var(--space-cadet);

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin: 4rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin: 2rem;
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
      padding: 1.5rem;
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

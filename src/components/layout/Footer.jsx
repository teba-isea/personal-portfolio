import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FooterContainer } from "../../styleds/layout"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row className="justify-content-center">
          <Col sm="10" md="6">
            <h2 className="text-center font-weight-bold">
              Con <span className="heading-1">&#10084;</span> para el mundo. E
              <span>steban</span> I<span>sea</span> 2021
            </h2>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  )
}

export default Footer

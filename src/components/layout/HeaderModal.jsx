import React,{useState} from "react"
import {Link} from "gatsby"
import { HeaderModalContainer } from "../../styleds/layout"
import {Fade} from "react-reveal"
import {Container,Row,Col} from "reactstrap"
import Social from "../Social"

const HeaderModal = ({isOpen,setIsOpen}) => {

  if (!isOpen) return null 

  return (
    <HeaderModalContainer>
      <Fade left>
	<button className="btn mb-5" onClick={()=> setIsOpen(false)}>
	  <h1 className="header-modal-title py-4 text-center text-shadow font-weight-bold">Menu <strong className="font-weight-bold exit-icon">&#10005;</strong></h1>
	</button> 
	<Container fluid>
	  <Row>
	    <Col sm="12" className="text-center font-weight-bold my-5" >
	    <Fade top>
	      <Link to="/blog"><h1>Blog</h1></Link>
	  </Fade>
	    </Col>
<Col sm="12" className="text-center font-weight-bold my-5" >
	  <Fade left>
  <Link to="/portfolio"><h1>Portfolio</h1></Link>
	  </Fade>
	    </Col>
	    <Col sm="12" className="text-center font-weight-bold my-5" >
	  <Fade bottom>
	      <Link to="contact"><h1>Contact</h1></Link>
	  </Fade>
	    </Col>
	    <Col sm="12" className="mt-5">
<Fade bottom wait="2000">
      <Social/>
    </Fade>
  </Col>
	  </Row>
	</Container>
      </Fade>
      
    </HeaderModalContainer>
  )
}

export default HeaderModal

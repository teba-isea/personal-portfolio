import React,{useState} from "react"
import { Link } from "gatsby"

import { Fade } from "react-reveal"
import { Row, Col } from "reactstrap"
import { HeaderContainer } from "../../styleds/layout"
import HeaderModal from "./HeaderModal"

const Header = () => {

  const [isOpenModal, setIsOpenModal] = useState(false)

   
  const handleIsOpenModal = () =>{
    !isOpenModal ? setIsOpenModal(true) : setIsOpenModal(false)
  }
  
  return (
    <HeaderContainer>
      <Fade top>
        <nav className="nav">
          <div className="container">
            <Row className="justify-content-between m-0">
              <Col
                sm="10"
                md="3"
                className="d-flex justify-content-center align-items-center"
              >
                <div className="logo pl-0 pl-md-3">
<button className="d-md-none btn text-primary" onClick={handleIsOpenModal}>
	<h1 className="m-0 p-0">&#9776;</h1>
      </button>
                  <Link
                    to="/"
                    className="text-left navbar-brand font-weight-bold"
    >
      

                    Teba<span>I</span>
                  </Link>
                </div>
              </Col>
              <Col
                sm="2"
                md="9"
                className="d-flex justify-content-center justify-content-md-right"
              >
                <div id="mainListDiv" className="main_list d-none d-md-block">
                  <ul className="navlinks d-flex justify-content-right">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
		<div className="d-block d-md-none">
		  <HeaderModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
		</div>
              </Col>
            </Row>
          </div>
        </nav>
      </Fade>
    </HeaderContainer>
  )
}

export default Header

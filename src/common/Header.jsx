import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/images/Screenshot_52.png'
export default function Header() {
  return (
    <div>
      <div className="header">
        <Container fluid>
          <Row>
            <Col lg={12} className="px-0">
              <Navbar collapseOnSelect expand="lg" >
                <Container>
                  <Navbar.Brand href="#">
                    <div className="header_logo">
                      <img src={logo} alt="header_logo" className='img-fluid' />
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto ">
                      <Nav.Link href="#play">PLAY <span>(</span>GENX<span>)</span></Nav.Link>
                      <Nav.Link href="#">PLAY <span>(</span>GENY <span style={{fontSize:"25px"}}>+</span> MIGRANT EDX<span>)</span></Nav.Link>

                    </Nav>
                    <Nav>
                      <div className="bear_connectWallet_btn">
                      <button>CONNECT WALLET</button>
                      </div>
                        
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'


function App() {
  // return (
  //   <>
  //     <Navbar expand="md" className="bg-body-tertiary">
  //       <Container>
  //         <Navbar.Brand href="#home"><img src='favicon.ico' style={{ width: "50px" }} /></Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="me-auto">
  //             <Nav.Link href="#home">Home</Nav.Link>
  //             <Nav.Link href="#link">About Us</Nav.Link>
  //             <Nav.Link href="#link">Contact Us</Nav.Link>
  //             <Nav.Link href="#link">Testimonials</Nav.Link>
  //             <Nav.Link href="#link">Services</Nav.Link>

  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>

  //     <br />
  //     <Carousel>
  //       <Carousel.Item>
  //         <img src='bg.jpg' style={{ width: '100%' }} />
  //         <Carousel.Caption>
  //           <h3>First slide label</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img src='bg2.jpg' style={{ width: '100%' }} />
  //         <Carousel.Caption>
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img src='bg3.jpg' style={{ width: '100%' }} />
  //         <Carousel.Caption>
  //           <h3>Third slide label</h3>
  //           <p>
  //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //           </p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //     </Carousel>

  //   </>
  // )

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src='bg.jpg' style={{ width: '462px' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="bg.jpg" style={{ width: '200px' }} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="bg2.jpg" style={{ width: '200px' }} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="bg3.jpg" style={{ width: '200px' }} thumbnail />
          </Col>
        </Row>
      </Container>



    </>
  );


}

export default App
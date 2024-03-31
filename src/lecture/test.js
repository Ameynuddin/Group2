import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


function App() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src='favicon.ico' style={{ width: "50px" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#link">Analytics</Nav.Link>
              <Nav.Link href="#link">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <br />
      <Carousel>
        <Carousel.Item>
          <img src='bg.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='bg2.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='bg3.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      {/* 

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

      <Container>
        <Row>
          <Col style={{ background: 'green', gridArea: 'main' }}>Main Content</Col>
          <Col style={{ background: 'green', gridArea: 'sidebar' }}>Sidebar</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}
      <br />
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="bg.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="bg.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="bg.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

      </Row>

      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>


    </>
  );


}

export default App
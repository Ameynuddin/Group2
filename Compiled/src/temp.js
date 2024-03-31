import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap'
import { CardImg, CardBody, CardTitle } from 'react-bootstrap'
import './App.css'

function Home() {
  return (
    <div className="main">
      {/* content 1 */}
      <Carousel>
        <Carousel.Item>
          <img src='pic1.jpeg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3 style={{ fontStyle: "italic", fontWeight: "bold", color: "White", fontSize: '80px' }}>Elegant</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='pic2.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3 style={{ fontStyle: "italic", fontWeight: "bold", color: "green", fontSize: '80px' }}>Stylish</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='pic3.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3 style={{ fontStyle: "italic", fontWeight: "bold", color: "purple", fontSize: '80px' }}>Contemporary</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='pic4.jpg' style={{ width: '100%' }} />
          <Carousel.Caption>
            <h3 style={{ fontStyle: "italic", fontWeight: "bold", color: "#875852", fontSize: '80px' }}>Attractive</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="hero">
        <Container>
          <h1 className="display-4 text-center text-white">Welcome to Our Apparel Shop</h1>
          <p className="lead text-center text-white">Explore our latest collection and find the perfect outfit for you.</p>

        </Container>
      </div>

      {/* content 2 */}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>New Arrivals</h1>
      <Nav variant="pills" defaultActiveKey="/home">
        <br />
        <Nav.Item>
          <Nav.Link href="/home">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Women</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Kids</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Sport</Nav.Link>
        </Nav.Item>
      </Nav>


      <Row className="mt-4">
        <Col md={4}>
          <CardComponent
            imgSrc="bg.jpg" style={{ width: '200px' }}
            title="Industrial"
            description="A leader in the heavy equipment business, offering a comprehensive range of heavy equipment products and services across Asia Pacific."
          />
        </Col>
        <Col md={4}>
          <CardComponent
            imgSrc="bg2.jpg" style={{ width: '200px' }}
            title="Motors"

          />
        </Col>
        <Col md={4}>
          <CardComponent
            imgSrc="bg3.jpg" style={{ width: '200px' }}
            title="Technology"/>
        </Col>
      </Row>
      {/* content 3 */}
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Men's Clothing</Card.Title>
                <Card.Text>
                  Explore our latest collection for men
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Women's Clothing</Card.Title>
                <Card.Text>
                  Check out our stylish collection for women
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Kids' Clothing</Card.Title>
                <Card.Text>
                  Cute and comfy outfits for your little ones
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <br />

      <div style={{ position: 'relative' }}>
        <img src='pic5.jpg' style={{ width: '90%' }} />
        <Container fluid className="text-overlay">
          {/* <h3 className="text-center" style={{  color: "orange", fontSize: '40px' }}>Online exclusive</h3> */}
          {/* <p className="text-center" style={{ fontWeight: "bold", color: "White", fontSize: '20px' }}>Limited Edition 2024</p><br /> */}
          <br /><br />
          <Button variant="primary">Shop Now</Button>
        </Container>
      </div>
    </div >
  )
}

export default Home
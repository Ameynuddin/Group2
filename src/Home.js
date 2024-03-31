import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Nav, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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

      {/* content 2 - categories */}
      <br />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>New Arrivals</h1>
      <br />
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/products">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products">Women</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#1">Kids</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#2">Sport</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* content 3 */}
      <div className="hero">
        <Carousel>
          {/* Men */}
          <Carousel.Item>
            <Row>
              <Col>
                <img src='card1.jpg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '90px' }}>Short-Sleeve Men T-Shirt<br />Regular price: $20.00 USD</p>
              </Col>
              <Col>
                <img src='card2.jpg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '90px' }}>Short-Sleeve Men T-Shirt<br />Regular price: $20.00 USD</p>
              </Col>
              <Col>
                <img src='card3.jpg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '50px' }}>Men Hoodie<br />Regular price: $29.00 USD</p>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Women  */}
          <Carousel.Item>
            <Row>
              <Col>
                <img src='card4.jpeg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '50px' }}>Linen-blend trousers<br />Regular price: $29.00 USD</p>
              </Col>
              <Col>
                <img src='card5.jpeg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '50px' }}>Utility trousers<br />Regular price: $19.95 USD</p>
              </Col>
              <Col>
                <img src='card6.jpg' style={{ width: '80%', margin: '50px' }} />
                <p style={{ marginLeft: '50px' }}>Rhinestone-Embellished Jeans<br />Regular price: $29.00 USD</p>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>

      <br />
      <br />
      {/* Content 4 - shop now */}
      <div style={{ position: 'relative' }}>
        <img src='pic5.jpg' style={{ width: '90%' }} />
        <Container fluid className="text-overlay">
          <br /><br />

          {/* to link to Products component */}
          <Button variant="primary">
            <Link to='/Products' style={{ textDecoration: 'none', color: 'inherit' }}></Link>Shop Now</Button>
        </Container>
      </div>
    </div >
  )
}

export default Home
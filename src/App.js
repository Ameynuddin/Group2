import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Products from './Products'
import Checkout from './CheckoutPage'

// Header Component
function Header() {
  return (
    <header className="bg-warning font-weight-bold py-3 text-center">
      <Router>
        <Navbar expand="md" className="bg-body-tertiary" bg='secondary'>
          <Container>
            <Navbar.Brand href="#home"><img src='favicon.ico' style={{ width: "50px" }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/serve">Services</Nav.Link>
                <Nav.Link as={Link} to="/con">Contact</Nav.Link>
                <Nav.Link as={Link} to="/Products">Products</Nav.Link>
                <Nav.Link as={Link} to="/CheckoutPage">Checkout</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/serve" element={<Services />} />
          <Route path="/con" element={<Contact />} />
          <Route path='/Products'  element={<Products/>}></Route>
          <Route path='/CheckoutPage'  element={<Checkout/>}></Route>

        </Routes>
      </Router>
    </header>

  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-white py-1 text-center mt-4">
      <p>All rights reserved &copy; 2024 XY Co. Ltd</p>
    </footer>
  )
}

// Main Content
const App = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  )
}

export default App


//------------------------------


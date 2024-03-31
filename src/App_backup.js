import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Image from 'react-bootstrap/Image';

// Header Section
function Header() {
  return (
    <div>
      {/* Creating the navbar using Routing, integrated with React Bootstrap  */}
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#"><Image src='blogo.jpg' roundedCircle style={{ width: "60px" }} />  Apparel Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ color: '#fff', marginRight: '15px' }}>About</Nav.Link>
                <Nav.Link as={Link} to="/products" style={{ color: '#fff', marginRight: '15px' }}>Products</Nav.Link>
                <Nav.Link as={Link} to="/con" style={{ color: '#fff', marginRight: '15px' }}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Shop deals to stay at the top on every page, hence placed in the header */}
        <Container fluid>
          <h1 className="text-center text-black" style={{ marginTop: '10px', backgroundColor: '#E9967A', padding: '10px' }}>Enjoy your Raya sales up to 60%!</h1>
        </Container>

        {/* To link to the different components */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/con" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-dark text-white py-1 text-center mt-4">
      <p>All rights reserved &copy; 2024 Apparel Shop</p>
    </footer>
  )
}

// Main Content
const App = () => {
  return (
    <div>
      <Header />
      <br /><br />
      <Footer />
    </div>
  )
}

export default App;

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Image from 'react-bootstrap/Image';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#"><Image src='blogo.jpg' roundedCircle style={{ width: "50px" }} />  Apparel Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ color: '#fff', marginRight: '15px' }}>About</Nav.Link>
                <Nav.Link as={Link} to="/serve" style={{ color: '#fff', marginRight: '15px' }}>Products</Nav.Link>
                <Nav.Link as={Link} to="/con" style={{ color: '#fff', marginRight: '15px' }}>Checkout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid>
          <h1 className="text-center text-black" style={{ marginTop: '10px', backgroundColor: '#E9967A', padding: '10px' }}>Enjoy your Raya sales up to 60%!</h1>
        </Container>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/serve" element={<Services />} />
          <Route path="/con" element={<Contact />} />
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import CheckOut from './CheckOut';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const { cartItems } = useCart(); // Access cart items count

  return (
    <header className="bg-warning font-weight-bold py-3 text-center">
      <Navbar expand="md" className="bg-body-tertiary" bg="secondary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="favicon.ico" style={{ width: "50px" }} alt="Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="ms-auto">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge bg-light text-dark ms-1">{cartItems.length}</span>
              </Nav.Link>

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
    </header>
  );
}
// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-white py-1 text-center mt-4">
      <p>All rights reserved &copy; 2024 XY Co. Ltd</p>
    </footer>
  );
}

// Main Content
const App = () => {
  return (
    <Router>
      <CartProvider> {/* Wrap components with CartProvider */}
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
            

          </Routes>
          <Footer />
        </Container>
      </CartProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

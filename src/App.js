import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { useCart } from './CartContext';
import Image from 'react-bootstrap/Image';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import CheckOut from './CheckOut';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Header Section
function Header() {
  const { cartItems } = useCart(); // Access cart items count

  return (
    < div >
      {/* Creating the navbar using Routing, integrated with React Bootstrap  */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#"><Image src='blogo.jpg' roundedCircle style={{ width: "60px" }} />  Laravel Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: '#fff', marginRight: '15px' }}>About</Nav.Link>
              <Nav.Link as={Link} to="/products" style={{ color: '#fff', marginRight: '15px' }}>Products</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: '#fff', marginRight: '15px' }}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="ms-auto">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge bg-light text-dark ms-1">{cartItems.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Shop deals to stay at the top on every page, hence placed in the header  */}
      <Container fluid>
        <h1 className="text-center text-black" style={{ marginTop: '10px', backgroundColor: '#E9967A', padding: '10px' }}>Enjoy your Raya sales up to 60%!</h1>
      </Container>

    </div >
  );
}
// Footer Component
function Footer() {
  return (
    <footer className="bg-dark py-2 text-center mt-4">
      <p style={{color:'white'}}><br />All rights reserved &copy; 2024 Laravel Shop</p>
    </footer>
  );
}

// Main Content
const App = () => {
  return (
    <Router>
      <CartProvider> {/* Wrap components with CartProvider */}
        <Header />
        <Routes>
          {/* To link to the different components */}
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

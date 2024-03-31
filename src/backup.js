import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import About from './About';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Home from './Services'
import About from './About';


// Header Component
const Header = () => {
    return (
        <header className="bg-warning font-weight-bold py-3 text-center">
            <Router>
                <Navbar expand="md" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"><img src='favicon.ico' style={{ width: "50px" }} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Services</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>

        </header>
    );
};


// Card Component
const CardComponent = ({ imgSrc, title, description }) => {
    const [open, setOpen] = useState(false);
    return (
        <Card>
            <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                {/* <CardText>{description}</CardText>
        <Button variant="primary">View More</Button> */}
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    View More
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {description}
                    </div>
                </Collapse>
            </CardBody>
        </Card>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-1 text-center mt-4">
            <p>All rights reserved &copy; 2024 XY Co. Ltd</p>
        </footer>
    );
};

// Main Content
const App = () => {
    return (
        <Container>
            <Header />
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
                        description="One of the leading automotive groups in Asia Pacific and actively involved in all facets of the automotive business – from importation and assembly to distribution, retail and rental."
                    />
                </Col>
                <Col md={4}>
                    <CardComponent
                        imgSrc="bg3.jpg" style={{ width: '200px' }}
                        title="Technology"
                        description="A leading industrial enterprise operating in Automotive, Equipment, Manufacturing and Engineering and Aerospace sectors."
                    />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default App;

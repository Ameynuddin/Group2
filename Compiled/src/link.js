import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the homepage!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the about page.</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;

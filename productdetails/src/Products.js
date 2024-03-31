import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} className="mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.images[0]} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

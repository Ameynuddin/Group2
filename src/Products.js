import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useCart } from './CartContext'; // Adjust path as necessary


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading to true
    const [error, setError] = useState('');
    const { addToCart } = useCart(); // Use addToCart from context

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when the request is complete
            });
    }, []); // Dependency array remains empty to run the effect once on mount

    if (loading) {
        return <Container>Loading products...</Container>; // Display while products are being fetched
        if (error) return <Container>{error}</Container>;
    };

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} className="mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.images[0] ? product.images[0] : 'path/to/default/image.jpg'} title={product.description || 'No description available'} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

import React from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import { useCart } from './CartContext'; 

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleChangeQuantity = (productId, quantity) => {
        updateQuantity(productId, quantity);
    };

    return (
        <ListGroup>
            {cartItems.map(item => (
                <ListGroup.Item key={item.id}>
                    {item.title} - ${item.price} x {item.quantity}
                    <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))}
                        style={{ width: '60px', display: 'inline', margin: '0 10px' }}
                    />
                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Cart;

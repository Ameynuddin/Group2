import React from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleChangeQuantity = (productId, quantity) => {
        updateQuantity(productId, quantity);
    };

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <>
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
            {cartItems.length > 0 && ( // Only show the checkout button if there are items in the cart
                <div className="mt-3">
                    <Button variant="primary" onClick={handleCheckout}>Proceed to Checkout</Button>
                </div>
            )}
        </>
    );
};

export default Cart;

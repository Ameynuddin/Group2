import React, { useState } from 'react';
import { Container, ListGroup, Button, Form, Col, Row, Alert } from 'react-bootstrap';
import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('sk_test_51P0FkEP4NWJFetkFcymoI38THACqjwte2IOY3IbdlvpfFv0pYNghRPAyvWHG3viN2bBDrpwH5Yx1ylVFkDcRMTjo00Hz6aVbBf');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCart();
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setPaymentProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setPaymentProcessing(false);
    } else {
      console.log(paymentMethod);
      alert('Payment successful');
      clearCart();
      setPaymentProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmitPayment}>
      <CardElement />
      <Button type="submit" disabled={!stripe || paymentProcessing} className="mt-4">
        {paymentProcessing ? 'Processing…' : 'Pay Now'}
      </Button>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Form>
  );
};

const CheckOut = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', address: '' });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  return (
    <Container>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? (
        <>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                {item.title} - ${item.price} x {item.quantity}
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)} className="float-right">Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="text-right mt-3">Total: ${calculateTotal()}</h4>
          <hr />
          <h3>Payment Information</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </>
      ) : (
        <Alert variant="success">
          Your cart is empty or payment was successful. Thank you for your purchase!
        </Alert>
      )}
    </Container>
  );
};

export default CheckOut;

import React from 'react';
import { useCart } from './CartContext'; // Adjust path as necessary

function CartDisplay() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  // Display cart items or any other logic you need
  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          {item.name} - {item.quantity}
          {/* Implement functionality to manipulate cart */}
        </div>
      ))}
    </div>
  );
}

export default CartDisplay;

// CartContext.js
import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

// Hook for child components to get the cart object
// and re-render when it changes.
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            const itemIndex = currentItems.findIndex((item) => item.id === product.id);
            if (itemIndex < 0) {
                // Product not in cart, add as a new entry.
                return [...currentItems, { ...product, quantity: 1 }];
            } else {
                // Product exists, update quantity.
                return currentItems.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((currentItems) =>
            currentItems.map((item) => (item.id === productId ? { ...item, quantity: quantity } : item))
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddToCart = (id, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + quantity
    }));
   window.alert("Added to cart successfully!");
  };

  const handleCheckout = () => {
    console.log("Redirecting to checkout page with cart:", cart);
  };



  return (
    <>
      <center>
        <h1>List of all items</h1>
      </center>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>images</th>
            <th>quantity</th>
            <th>add to cart</th>
          </tr>
        </thead>
        <tbody>
          {data.map(ecom => (
            <tr key={ecom.id}>
              <td>{ecom.id}</td>
              <td>{ecom.title}</td>
              <td>RM{ecom.price}</td>
              <td>{ecom.description}</td>
              <td><img src={ecom.images} alt={ecom.title} style={{ width: '100px' }} /></td>
              <td>
                <input type="number" defaultValue="1" min="1" id={`quantity_${ecom.id}`} /> 
              </td>
              <td>
                <button onClick={() => handleAddToCart(ecom.id, parseInt(document.getElementById(`quantity_${ecom.id}`).value))}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handleCheckout}>Checkout</button> 
      </div>
    </>
  );
}

export default App;
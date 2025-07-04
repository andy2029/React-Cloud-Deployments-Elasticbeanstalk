import React from 'react';
import { useState, useEffect } from 'react';
import SmallScaleFarming from './SmallScaleFarming';
import Cart from './Cart';
import './styles.css';
import { getSpecials } from "../data/repository";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const Specials = () => {
  // Fetch specials data from localStorage
  const specials = getSpecials();
  const savedUser = localStorage.getItem('user');
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
  const [cartsVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProducts] =
    useState(JSON.parse(localStorage.getItem("shopping-cart")) || []
    );


  // Add shopping cart to local storage
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart))
  }, [productsInCart]);


  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    }

    setProducts([
      ...productsInCart,
      newProduct,
    ])
  }

  // Edit product count
  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    })
  }

  // Remove product from shopping cart
  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === product.id);
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1)
      }
      return [...oldState];
    })
  }

  return (
    <div className="specials">
      <h2>Specials of the Week</h2>
      {/* Display shopping cart if logged in */}
      {user && (
        <div className="cart-logo">
          <Cart visibility={cartsVisibility} products={productsInCart}
            onClose={() => setCartVisible(false)}
            onQuantityChange={onQuantityChange}
            onProductRemove={onProductRemove} />
          <button className='btn shopping-cart-btn' onClick={() => setCartVisible(true)}>
            <AiOutlineShoppingCart size={30} />
          </button>
        </div>
      )}
      {/* Display specials */}
      <div className="cards">
        {specials.map((special) => (
          <div className="card" key={special.id}>
            <img className="product-image" src={special.image}></img>
            <h5>{special.name}</h5>
            <div className="product-text">
              Originally: {special.original_price} <br />
              Now: <strong>{special.special_price}!</strong>
            </div>
            {/* Be able to add product to cart if logged in*/}
            {user && (
              <Button variant="dark" type="submit" onClick={() => addProductToCart(special)}>
                Add to cart
              </Button>
            )}
          </div>
        ))}
      </div>
      <SmallScaleFarming />
    </div>
  );
}

export default Specials;

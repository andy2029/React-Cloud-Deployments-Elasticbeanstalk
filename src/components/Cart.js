import React, { useState } from 'react';
import './styles.css';
import Checkout from './Checkout';
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const Cart = ({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) => {
    const [cart, setCart] = useState([]);

    const [checkOut, setCheckOut] = useState(false);

    const [show, setShow] = useState(true);

    const handleCheckout = () => {
        setCheckOut(!checkOut)
        setShow(!show)
    };

    return (
        <div className="cart" style={{
            display: visibility
                ? "block" : "none",
        }}>
            <div className="shopping-cart">
                <div className="header">
                    <h2>Shopping Cart</h2>
                    {/* Show shopping cart when clicked */}
                    <button className="btn close-btn" onClick={onClose}>
                        <AiFillCloseCircle style={{ fill: 'white' }} size={30} />
                    </button>
                </div>
                <div className="cart-products">
                    {/* Display shopping cart products*/}
                    {products.length === 0 && (<span className="empty-text">
                        Your basket is currently empty</span>)}
                    {products.map(product => (
                        <div className='cart-product' key={product.id}>
                            <img src={product.image} />
                            <div className="product-info">
                                <h5>{product.name}</h5>

                                <span className="product-price">${parseFloat(product.special_price.replace('$', '')) * product.count}</span>
                            </div>
                            {/* Edit product count. Only visible when not in check-out*/}
                            {show && (
                                <select className='count' value={product.count} onChange={(event) => {
                                    onQuantityChange(product.id, event.target.value);
                                }}>

                                    {[...Array(10)
                                        .keys(),
                                    ].map(number => {
                                        const num = number + 1;
                                        return <option value={num} key={num}>{num}</option>
                                    })}
                                </select>
                            )}
                            {/* Product quantity. Shown when in check-out*/}
                            {!show && (
                                <div className="product-info">
                                    <strong>Quantity: </strong>{product.count}
                                </div>
                            )}
                            {/* Remove product from cart. Visible when not in check-out*/}
                            {show && (
                                <button className="btn remove-btn" onClick={() =>
                                    onProductRemove(product)}>
                                    <AiFillDelete size={25} />
                                </button>
                            )}
                        </div>
                    ))}
                    {/* If shopping-cart has item in it, show check-out button*/}
                    {products.length > 0 && show && (
                        <Button variant="primary" className="checkout-btn" onClick={handleCheckout}>Checkout</Button>
                    )}
                    {/* Display checkout component*/}
                    {checkOut && (
                        <div className='checkout'>
                            <Checkout />
                            {/* Closes checkout component and show shopping-cart edit options again*/}
                            <button className="btn close-btn" onClick={handleCheckout}>
                                <AiFillCloseCircle size={30} />
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Cart;
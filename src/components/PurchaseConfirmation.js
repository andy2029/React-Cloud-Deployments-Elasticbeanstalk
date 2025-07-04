import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ConfirmationPurchase = () => {
    // Geting shopping cart from localStorage
    const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    let navigate = useNavigate()

    // Remove stored shopping cart and card details and then navigate back to home page
    const clearCart = () => {
        localStorage.removeItem("shopping-cart");
        localStorage.removeItem("card")
        navigate("/")
    }

    // Get shopping cart total price
    const cartTotal = () => {
        var total = 0;
        for (var i = 0; i < shoppingCart.length; i++) {
            var product = shoppingCart[i]
            var productTotal = product.count * parseFloat(product.special_price.replace('$', ''))
            total = total + productTotal
        }
        return total;
    }



    return (
        <div className='purchase'>
            <h2 style={{ textAlign: 'center' }}>Purchase Confirmation</h2>
            <div style={{ overflowY: 'hidden' }} className="cart-products">
                {shoppingCart.map((product) => (
                    <div className="cart-product">
                        <img className="product-image" src={product.image}></img>
                        <div className="product-info">
                            <h5>{product.name}</h5>
                            <strong>Quantity:</strong> {product.count}
                        </div>
                        <div className="purchase-info">
                            <strong>${parseFloat(product.special_price.replace('$', '')) * product.count} </strong>
                        </div>
                    </div>
                ))}
            </div>
            <h4 style={{ textAlign: 'right' }}>Total: ${cartTotal()}</h4>
            <Button variant="primary" style={{ alignSelf: 'flex-end' }} onClick={clearCart}>Close</Button>
        </div>
    )

}

export default ConfirmationPurchase
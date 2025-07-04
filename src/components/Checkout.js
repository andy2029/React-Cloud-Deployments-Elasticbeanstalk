import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];

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

    // Card data
    const [cardData, setCardData] = useState({
        cardnumber: '',
        expdate: '',
        cvv: ''
    });

    // Change card data
    const handleInputChange = (e) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        });
    };

    const [errorMessage, setErrorMessage] = useState('');

    // Validate credit card number using Luhn Algorithm
    const validateLuhnAlgorithm = (cardNumber) => {
        let sum = 0;
        let isEven = false;

        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);

            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            isEven = !isEven;
        }

        return sum % 10 === 0;
    }

    // Validate expiry date matches format MM/YY
    const validateDate = (expdate) => {
        const re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        return re.test(expdate);
    }

    // Validate expiry date 
    const validateExpirationDate = (expirationMonth, expirationYear) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth() + 1 // January is 0

        if (expirationYear > currentYear) {
            return true;
        }
        else if (expirationYear == currentYear) {
            if (expirationMonth >= currentMonth) {
                return true;
            }
            return false;
        }
    }

    let navigate = useNavigate();

    // Validate credit card
    const validateCard = (e) => {
        e.preventDefault();
        if (!validateLuhnAlgorithm(cardData.cardnumber)) {
            setErrorMessage('Please enter a valid card number.')
            return;
        }

        if (!validateDate(cardData.expdate)) {
            setErrorMessage('Invalid date')
            return;
        }

        // Split expiry date string to access month and year
        let data = cardData.expdate.split("/");
        let expirationMonth = data[0];
        let expirationYear = '20' + data[1];

        // Validate expiration date
        if (!validateExpirationDate(expirationMonth, expirationYear)) {
            setErrorMessage('Card has expired.')
            return;
        }


        localStorage.setItem('card', JSON.stringify(cardData));
        setErrorMessage('');
        // Redirect to PurchaseConfirmation page & component
        navigate("/purchaseconfirmation")

    }

    return (
        <div>
            <h3>Checkout</h3>
            <div className="right">
                <h4>Total = ${cartTotal()}</h4>
            </div>
            <div className="form" style={{ width: 500 }}>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={validateCard}>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John Doe" />
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" value={cardData.cardnumber} onChange={handleInputChange} placeholder="1111-2222-3333-4444" required />
                    <label for="expmonth">Exp Date</label>
                    <input type="text" id="expdate" name="expdate" value={cardData.expdate} onChange={handleInputChange} placeholder="MM/YY" required />
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" value={cardData.cvv} onChange={handleInputChange} placeholder='&bull;&bull;&bull;' required />
                    <button type="submit">Check Out</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout
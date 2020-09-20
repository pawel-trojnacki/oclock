import React, { useState, useEffect, useContext } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

import { CartContext } from '../context/CartContext';
import {
  orderFormElements,
  orderFormInitialState,
} from '../constatns/orderForm';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#333',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '18px',
      '::placeholder': {
        color: '#555',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

export default () => {
  const stripe = useStripe();
  const elements = useElements();

  const { cart, clearCart } = useContext(CartContext);

  const [token, setToken] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const [form, setForm] = useState(orderFormInitialState);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result = await stripe.confirmCardPayment(token, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    const data = {
      paymentIntent: result.paymentIntent,
      ...form,
      cart,
    };

    const response = await axios.post('http://localhost:1337/orders', {
      ...data,
    });

    setLoading(false);
    setSuccess(true);
    clearCart();
  };

  useEffect(() => {
    const loadToken = async () => {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:1337/orders/payment',
        {
          cart: cart.map(product => {
            return { ...product, ...{ id: product.strapiId } };
          }),
        }
      );

      console.log(response.data);

      setToken(response.data.client_secret);
      setTotal(response.data.amount);
      setLoading(false);
    };

    loadToken();
  }, [cart]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h3>Total: {`$${(total / 100).toFixed(2)}`}</h3>
      )}
      {success ? (
        <h2>Order has been successfully processed.</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* shipping fields */}
          {orderFormElements.map(({ field, name, type }) => {
            return (
              <p key={field}>
                <label htmlFor={field}>{name}</label>
                <input
                  type={type}
                  name={field}
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                />
              </p>
            );
          })}
          {/* card field */}
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          <button disabled={!stripe}>Confirm order</button>
        </form>
      )}
    </div>
  );
};

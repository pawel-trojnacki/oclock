import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {
  CountryDropdown,
  RegionDropdown,
  // CountryRegionData,
} from 'react-country-region-selector';
import axios from 'axios';

import { CartContext } from '../../context/CartContext';
import {
  orderFormElements,
  orderFormInitialState,
} from '../../constatns/orderForm';
import { validateForm } from '../../utils/validateForm';

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

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { cart, clearCart } = useContext(CartContext);

  const [token, setToken] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [form, setForm] = useState(orderFormInitialState);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const errorMessage = validateForm(form);
    if (errorMessage) {
      setError(errorMessage);
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

    const response = await axios.post(`${process.env.GATSBY_API_URL}/orders`, {
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
        `${process.env.GATSBY_API_URL}/orders/payment`,
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
    forceUpdate();
  }, []);

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
                {name !== 'country' && name !== 'state' && (
                  <input
                    type={type}
                    name={field}
                    id={field}
                    value={form[field]}
                    onChange={handleChange}
                  />
                )}
                {name === 'country' && (
                  <CountryDropdown
                    id={field}
                    name={field}
                    value={form[field]}
                    onChange={value => {
                      setForm({ ...form, shipping_country: value });
                      setError(null);
                    }}
                  />
                )}
                {name === 'state' && (
                  <RegionDropdown
                    id={field}
                    name={field}
                    defaultOptionLabel="Select state"
                    country={form.shipping_country}
                    value={form[field]}
                    onChange={value => {
                      setForm({ ...form, shipping_state: value });
                      setError(null);
                    }}
                  />
                )}
              </p>
            );
          })}
          {/* card field */}
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          <button disabled={!stripe}>Confirm order</button>
          {error && <h2>{error}</h2>}
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;

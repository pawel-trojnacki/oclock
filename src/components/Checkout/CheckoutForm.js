import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import axios from 'axios';

import { CartContext } from '../../context/CartContext';
import {
  orderFormElements,
  orderFormInitialState,
} from '../../constants/orderForm';
import { validateForm } from '../../utils/validateForm';
import {
  StyledForm,
  FormField,
  PaymentField,
  PaymentWrapper,
  BottomWrapper,
} from './CheckoutFormStyles';
import styleOptions from './styleOptions';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Message from '../Message/Message';

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

  if (success) {
    return (
      <Message
        content="Order has been successfully processed."
        link="/"
        btnText="Homepage"
      />
    );
  }

  return (
    <div>
      {success ? (
        <Message
          content="Order has been successfully processed."
          link="/"
          btnText="Homepage"
        />
      ) : (
        <>
          {loading && (
            <Heading align="left" medium>
              Loading...
            </Heading>
          )}
          {!loading && (
            <Heading align="left" medium>
              Total price: {`$${(total / 100).toFixed(2)}`}
            </Heading>
          )}
          <StyledForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {orderFormElements.map(({ field, name, type }) => {
              return (
                <FormField key={field}>
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
                </FormField>
              );
            })}
            <PaymentField>
              <label>Payment</label>
              <PaymentWrapper>
                <CardElement options={styleOptions} />
              </PaymentWrapper>
            </PaymentField>
            <BottomWrapper>
              {error && (
                <Paragraph big bold error>
                  {error}
                </Paragraph>
              )}
              <Button disabled={!stripe}>Confirm order</Button>
            </BottomWrapper>
          </StyledForm>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;

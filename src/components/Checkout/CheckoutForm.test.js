import React from 'react';
import { render } from '@testing-library/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import CartProvider from '../../context/CartContext';

const stripePromise = loadStripe(process.env.STRIPE_PK);

it('renders component', async () => {
  const { getByText } = render(
    <Elements stripe={stripePromise}>
      <CartProvider>
        <CheckoutForm />
      </CartProvider>
    </Elements>
  );
  expect(getByText('Loading...')).toBeInTheDocument();
});

it('renders component', async () => {
  const { getByText } = render(
    <Elements stripe={stripePromise}>
      <CartProvider>
        <CheckoutForm />
      </CartProvider>
    </Elements>
  );
  expect(getByText('United States')).toBeInTheDocument();
});

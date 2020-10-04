import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import { CheckoutWrapper } from './CheckoutStyles';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PK);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutWrapper>
        <CheckoutForm />
      </CheckoutWrapper>
    </Elements>
  );
};

export default Checkout;

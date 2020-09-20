import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51HST1ECyWvLhW4L3iV9ouDB2O0GTss6CYrWSC9ndOTAZdSPm0AfOsNCMsT2fcwusqsQkEns6W13NWuiWa3SefsIu00wk9L2lsp'
);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;

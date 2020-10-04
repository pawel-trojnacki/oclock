import React, { useState, useContext, useEffect } from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import Checkout from '../components/Checkout/Checkout';
import { CartContext } from '../context/CartContext';
import Message from '../components/Message/Message';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    if (!cart || cart.length === 0) {
      setEmpty(true);
    }
  }, []);

  return (
    <Layout>
      <SEO title="Checkout" />
      {empty ? (
        <Message
          content="You have nothing in your cart to buy"
          link="/shop"
          btnText="Shop"
        />
      ) : (
        <Checkout />
      )}
    </Layout>
  );
};

export default CheckoutPage;

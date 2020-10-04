import React, { useContext } from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import { CartContext } from '../context/CartContext';
import Cart from '../components/Cart/Cart';
import Message from '../components/Message/Message';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <SEO title="Cart" />
      {cart && cart.length > 0 ? (
        <Cart cart={cart} />
      ) : (
        <Message
          content="Your cart is currently empty. Let's change it!"
          link="/shop"
          btnText="Shop"
        />
      )}
    </Layout>
  );
};

export default CartPage;

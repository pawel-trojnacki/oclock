import React, { useState, useCallback, useContext } from 'react';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import { cartTotal } from '../utils/cart';
import { CartContext } from '../context/CartContext';
import Checkout from '../components/Checkout';

const CartPage = () => {
  const { cart, addToCart } = useContext(CartContext);
  const totalPrice = cartTotal(cart);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        <>
          <ul>
            {cart.map(product => {
              const price = (product.price_in_cents / 100).toFixed(2);
              return (
                <li key={product.id}>
                  <h2>{product.name}</h2>
                  <p>
                    Quantity:
                    <span
                      onClick={() => {
                        addToCart(product, -1);
                        forceUpdate();
                      }}
                    >
                      -
                    </span>
                    <span>{product.quantity}</span>
                    <span
                      onClick={() => {
                        addToCart(product, 1);
                        forceUpdate();
                      }}
                    >
                      +
                    </span>
                  </p>
                  <p>{`$${price}`}</p>
                  <Img fixed={product.image.childImageSharp.fixed} />
                </li>
              );
            })}
          </ul>
          <h3>{totalPrice}</h3>

          <div>
            {cart && cart.length > 0 && (
              <button onClick={() => setShowCheckout(true)}>Checkout</button>
            )}
            {showCheckout && <Checkout />}
          </div>
        </>
      ) : (
        <div>
          <p>Your cart is currently empty</p>
        </div>
      )}
    </Layout>
  );
};

export default CartPage;

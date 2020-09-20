import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Layout = ({ children }) => {
  const { cart } = useContext(CartContext);
  const quantity = cart.reduce((prev, { quantity }) => {
    return prev + quantity;
  }, 0);
  return (
    <div>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
          {quantity}
        </li>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

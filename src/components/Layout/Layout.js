import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  const { cart } = useContext(CartContext);
  let quantity = 0;
  if (cart && cart.length > 0) {
    quantity = cart.reduce((prev, { quantity }) => {
      return prev + quantity;
    }, 0);
  }

  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          {quantity}
        </li>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

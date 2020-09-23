import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'gatsby';

// import { CartContext } from '../../context/CartContext';
import { getCart } from '../../utils/cart';
import {
  NavWrapper,
  Nav,
  ListItem,
  ListItemFirst,
  NavLink,
  Quantity,
} from './NavbarStyles';
import Arrow from '../Icons/Arrow';

const Navbar = ({ productPage, shopPage }) => {
  // const { cart } = useContext(CartContext);
  const cart = getCart();
  let quantity = 0;
  if (cart && cart.length > 0) {
    quantity = cart.reduce((prev, { quantity }) => {
      return prev + quantity;
    }, 0);
  }

  const [lastY, setLastY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPosition = window.scrollY;
      const isScrollingUp = lastY > yPosition;
      setNavHidden(!isScrollingUp && yPosition > 0);
      setLastY(yPosition);
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastY]);

  return (
    <NavWrapper
      animate={navHidden ? { opacity: 0, y: '-50px' } : { opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-50px' }}
      transition={{ duration: 0.3 }}
    >
      <Nav>
        {productPage ? (
          <ListItemFirst whileHover={{ x: -6 }} transition={{ duration: 0.3 }}>
            <NavLink to="/shop">
              <Arrow />
            </NavLink>
          </ListItemFirst>
        ) : (
          <ListItemFirst>
            <NavLink to="/">O'clock</NavLink>
          </ListItemFirst>
        )}
        <ListItem>
          {shopPage ? (
            <NavLink to="/">Home</NavLink>
          ) : (
            <NavLink to="/shop">Shop</NavLink>
          )}
        </ListItem>
        <ListItem>
          <NavLink to="/cart">
            Cart
            <Quantity>{quantity > 0 && quantity}</Quantity>
          </NavLink>
        </ListItem>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;

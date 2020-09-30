import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../../context/CartContext';
import {
  NavWrapper,
  Nav,
  ListItem,
  ListItemFirst,
  NavLink,
  Quantity,
} from './NavbarStyles';
import Arrow from '../Icons/Arrow';
import { aniLinkProperties } from '../../animations/aniLinkProperties';

const Navbar = ({ productPage, shopPage }) => {
  const { cart } = useContext(CartContext);
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
            <NavLink
              to="/shop"
              cover
              bg={aniLinkProperties.bg}
              direction="right"
              duration={aniLinkProperties.duration}
            >
              <Arrow />
            </NavLink>
          </ListItemFirst>
        ) : (
          <ListItemFirst>
            <NavLink
              to="/"
              cover
              bg={aniLinkProperties.bg}
              direction="down"
              duration={aniLinkProperties.duration}
            >
              O'clock
            </NavLink>
          </ListItemFirst>
        )}
        <ListItem>
          {shopPage ? (
            <NavLink
              to="/"
              cover
              bg={aniLinkProperties.bg}
              direction="down"
              duration={aniLinkProperties.duration}
            >
              Home
            </NavLink>
          ) : (
            <NavLink
              to="/shop"
              cover
              bg={aniLinkProperties.bg}
              direction="left"
              duration={aniLinkProperties.duration}
            >
              Shop
            </NavLink>
          )}
        </ListItem>
        <ListItem>
          <NavLink
            to="/cart"
            cover
            bg={aniLinkProperties.bg}
            direction="left"
            duration={aniLinkProperties.duration}
          >
            Cart
            <Quantity>{quantity > 0 && quantity}</Quantity>
          </NavLink>
        </ListItem>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;

const { bool } = PropTypes;
Navbar.propTypes = {
  productPage: bool,
  shopPage: bool,
};

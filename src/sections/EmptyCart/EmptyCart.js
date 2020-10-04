import React from 'react';

import { StyledEmptyCart } from './EmptyCartStyles';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

const EmptyCart = () => {
  return (
    <StyledEmptyCart
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading medium>
        Your cart is currently empty. <br />
        Let's change it!
      </Heading>
      <Button link="/shop">Shop</Button>
    </StyledEmptyCart>
  );
};

export default EmptyCart;

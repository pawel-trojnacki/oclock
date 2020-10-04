import React, { useState, useCallback, useContext } from 'react';
import { array } from 'prop-types';
import Img from 'gatsby-image';
import { isMobile } from 'react-device-detect';

import { CartContext } from '../../context/CartContext';
import { cartTotal } from '../../utils/cart';
import {
  CartWrapper,
  CartList,
  CartItem,
  ImageWrapper,
  InnerWrapper,
  CartHeading,
  CartParagraph,
  Quantity,
  QuantitySpan,
  Summary,
  SummaryItem,
  ButtonWrapper,
} from './CartStyles';
import Button from '../Button/Button';
import Heading from '../../components/Heading/Heading';

const Cart = ({ cart }) => {
  const { addToCart } = useContext(CartContext);
  const totalPrice = cartTotal(cart);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CartList>
        {cart.map(product => {
          const price = (product.price_in_cents / 100).toFixed(2);
          return (
            <CartItem key={product.id}>
              <ImageWrapper>
                <Img fluid={product.image.childImageSharp.fluid} />
              </ImageWrapper>
              <InnerWrapper>
                {isMobile ? (
                  <>
                    <CartHeading as="h2" small bold>
                      {product.name}
                    </CartHeading>
                    <CartHeading as="p" small bold>{`$${price}`}</CartHeading>
                  </>
                ) : (
                  <>
                    <CartHeading as="h2" medium>
                      {product.name}
                    </CartHeading>
                    <CartHeading as="p" small bold>{`$${price}`}</CartHeading>
                  </>
                )}

                <Quantity>
                  <Button
                    secondary
                    clickFn={() => {
                      addToCart(product, -1);
                      forceUpdate();
                    }}
                  >
                    -
                  </Button>
                  <QuantitySpan as="span" bold>
                    {product.quantity}
                  </QuantitySpan>
                  <Button
                    secondary
                    clickFn={() => {
                      addToCart(product, 1);
                      forceUpdate();
                    }}
                  >
                    +
                  </Button>
                </Quantity>
              </InnerWrapper>
            </CartItem>
          );
        })}
      </CartList>
      <Summary>
        <Heading as="h2" medium align="left" margin="10px 10px 20px">
          Summary
        </Heading>
        <SummaryItem>
          <CartParagraph big>Total amount:</CartParagraph>
          <CartParagraph big>${totalPrice}</CartParagraph>
        </SummaryItem>
        <SummaryItem>
          <CartParagraph big>Shipping:</CartParagraph>
          <CartParagraph big>Free</CartParagraph>
        </SummaryItem>
        <SummaryItem>
          <CartParagraph big bold>
            Total price:
          </CartParagraph>
          <CartParagraph big bold>
            ${totalPrice}
          </CartParagraph>
        </SummaryItem>

        <ButtonWrapper>
          <Button link="/checkout">Checkout</Button>
        </ButtonWrapper>
      </Summary>
    </CartWrapper>
  );
};

export default Cart;

Cart.propTypes = {
  cart: array.isRequired,
};
Cart.defaultProps = {
  cart: [],
};

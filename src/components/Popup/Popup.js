import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { PopupWrapper, StyledPopup, ButtonsWrapper } from './PopupStyles';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const Popup = ({ name, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <PopupWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          <StyledPopup>
            <Heading as="p" medium>
              {name} has been added to cart
            </Heading>
            <ButtonsWrapper>
              <Button clickFn={() => setIsOpen(false)}>Close</Button>
              <Button link="/cart">Cart</Button>
            </ButtonsWrapper>
          </StyledPopup>
        </PopupWrapper>
      )}
    </AnimatePresence>
  );
};

export default Popup;

import React from 'react';
import { string } from 'prop-types';

import { StyledMessage } from './MessageStyles';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const Message = ({ content, link, btnText }) => {
  return (
    <StyledMessage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading medium>{content}</Heading>
      {link && btnText && <Button link={link}>{btnText}</Button>}
    </StyledMessage>
  );
};

export default Message;

Message.propTypes = {
  content: string.isRequired,
  link: string,
  btnText: string,
};
Message.defaultProps = {
  content: 'Your cart is currently empty',
};

import React from 'react';
import Caption from '../Caption/Caption';
import Paragraph from '../Paragraph/Paragraph';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Caption as="p">O'clock</Caption>
      <div>
        <Paragraph align="center">
          {`${year} by: Paweł Trojnacki `}
          <br />
          <br />
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;

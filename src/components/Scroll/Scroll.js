import React from 'react';
import { StyledScroll, LineWrapper, Line } from './ScrollStyle';
import Paragraph from '../Paragraph/Paragraph';

const Scroll = ({ horizontal }) => {
  return (
    <StyledScroll
      horizontal={horizontal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: horizontal ? 1 : 2 }}
    >
      <Paragraph as="span">SCROLL</Paragraph>
      <LineWrapper horizontal={horizontal}>
        <Line
          horizontal={horizontal}
          initial={horizontal ? { x: '-110%' } : { y: '-110%' }}
          animate={
            horizontal
              ? { x: ['-110%', '0%', '110%'] }
              : { y: ['-110%', '0%', '110%'] }
          }
          transition={{
            delay: horizontal ? 1 : 2,
            duration: 2.5,
            repeat: Infinity,
          }}
        />
      </LineWrapper>
    </StyledScroll>
  );
};

export default Scroll;

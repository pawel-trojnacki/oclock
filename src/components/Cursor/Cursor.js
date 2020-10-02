import React, { useState, useEffect } from 'react';

import { StyledCursor } from './CursorStyles';
import { useCursorState } from '../../context/CursorContext';

const Cursor = () => {
  const [position, setPosition] = useState({
    y: 400,
    x: 400,
  });

  const [display, setDisplay] = useState(false);
  const { cursorType, top, left, width, height } = useCursorState();
  const isSticky = cursorType === 'sticky';

  const handleMouseMove = e => {
    setPosition({
      y: e.pageY - window.scrollY,
      x: e.pageX,
    });
    if (!display) {
      setDisplay(true);
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <StyledCursor
      sticky={isSticky}
      style={
        isSticky
          ? {
              display: display ? 'block' : 'none',
              top: top + height / 2,
              left: left + width / 2,
              width: width + 2,
              height: height + 2,
            }
          : {
              display: display ? 'block' : 'none',
              top: position.y,
              left: position.x,
            }
      }
      className={cursorType}
    />
  );
};

export default Cursor;

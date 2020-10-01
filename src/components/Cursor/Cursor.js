import React, { useState, useEffect } from 'react';

import { StyledCursor, CursorInner } from './CursorStyles';
import { useCursorState } from '../../context/CursorContext';

const Cursor = () => {
  const [position, setPosition] = useState({
    y: 400,
    x: 400,
  });

  const [display, setDisplay] = useState(false);
  const { cursorType } = useCursorState();

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
      style={{
        top: position.y,
        left: position.x,
        display: display ? 'block' : 'none',
      }}
      className={cursorType}
    />
    //     <StyledCursor
    //     style={{
    //       top: position.y,
    //       left: position.x,
    //       display: display ? 'block' : 'none',
    //     }}
    //   >
    //     <CursorInner />
    //   </StyledCursor>
  );
};

export default Cursor;

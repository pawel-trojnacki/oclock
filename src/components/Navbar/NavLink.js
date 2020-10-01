import React from 'react';
import { StyledNavLink } from './NavbarStyles';
import { useCursorDispatch } from '../../context/CursorContext';

const NavLink = ({ children, to, bg, duration, direction }) => {
  const dispatch = useCursorDispatch();

  return (
    <StyledNavLink
      to={to}
      cover
      bg={bg}
      duration={duration}
      direction={direction}
      onMouseEnter={() => dispatch({ type: 'HOVERED' })}
      onMouseLeave={() => dispatch({ type: 'INACTIVE' })}
    >
      {children}
    </StyledNavLink>
  );
};

export default NavLink;

import React from 'react';
import PropTypes from 'prop-types';
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

const { oneOfType, arrayOf, node, string, number } = PropTypes;
NavLink.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  to: string.isRequired,
  bg: string.isRequired,
  duration: number.isRequired,
  direction: string.isRequired,
};
NavLink.defaultProps = {
  to: '/',
  bg: '#1a1a1a',
  duration: 2,
  direction: 'left',
};

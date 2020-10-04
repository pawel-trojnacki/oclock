import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { StyledButton } from './ButtonStyles';
import { useCursorDispatch } from '../../context/CursorContext';
import { aniLinkProperties } from '../../animations/aniLinkProperties';

const Button = ({ children, clickFn, link, secondary }) => {
  const dispatch = useCursorDispatch();
  const handleHover = e => {
    dispatch({
      type: 'STICKY',
      left: e.target.getBoundingClientRect().left,
      top: e.target.getBoundingClientRect().top,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    });
  };
  return (
    <StyledButton
      secondary={secondary}
      onMouseEnter={handleHover}
      onMouseLeave={() => dispatch({ type: 'INACTIVE' })}
      onClick={clickFn || null}
      as={link ? AniLink : 'button'}
      to={link}
      cover
      bg={aniLinkProperties.bg}
      direction="left"
      duration={aniLinkProperties.duration}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const { oneOfType, arrayOf, node, string, func, bool } = PropTypes;

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  clickFn: func,
  link: string,
  secondary: bool,
};

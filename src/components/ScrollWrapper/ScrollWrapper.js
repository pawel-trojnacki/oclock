import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import useWindowSize from '../../hooks/useWindowSize';
import { PageWrapper, StyledScrollWrapper } from './ScrollWrapperStyles';

const ScrollWrapper = ({ children, horizontal }) => {
  const size = useWindowSize();
  const page = useRef(null);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    document.body.style.height = `${
      horizontal
        ? scrollContainer.getBoundingClientRect().width
        : scrollContainer.getBoundingClientRect().height
    }px`;
  }, [size]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrolling());
  }, []);

  const smoothConfigs = {
    ease: 0.05,
    current: 0,
    previous: 0,
    smooth: 0,
  };

  const smoothScrolling = () => {
    smoothConfigs.current = window.scrollY;
    smoothConfigs.previous +=
      (smoothConfigs.current - smoothConfigs.previous) * smoothConfigs.ease;
    smoothConfigs.smooth = Math.round(smoothConfigs.previous * 100) / 100;

    if (scrollContainer.current) {
      scrollContainer.current.style.transform = horizontal
        ? `translateX(-${smoothConfigs.smooth}px)`
        : `translateY(-${smoothConfigs.smooth}px)`;
    }

    requestAnimationFrame(() => smoothScrolling());
  };
  return (
    <PageWrapper ref={page} horizontal={horizontal}>
      <StyledScrollWrapper
        ref={scrollContainer}
        className="scroll-container"
        horizontal={horizontal}
      >
        {children}
      </StyledScrollWrapper>
    </PageWrapper>
  );
};

const { oneOfType, arrayOf, node, bool } = PropTypes;

ScrollWrapper.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  horizontal: bool,
};

export default ScrollWrapper;

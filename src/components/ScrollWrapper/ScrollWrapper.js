import React, { useRef, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { PageWrapper, StyledScrollWrapper } from './ScrollWrapperStyles';

const ScrollWrapper = ({ children, horizontal }) => {
  const size = useWindowSize();
  const page = useRef(null);
  //   const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    document.body.style.height = `${
      horizontal
        ? scrollContainer.getBoundingClientRect().width
        : scrollContainer.getBoundingClientRect().height
    }px`;
  }, [size.height]);

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
    const scrollContainer = document.querySelector('.scroll-container');

    smoothConfigs.current = window.scrollY;
    smoothConfigs.previous +=
      (smoothConfigs.current - smoothConfigs.previous) * smoothConfigs.ease;
    smoothConfigs.smooth = Math.round(smoothConfigs.previous * 100) / 100;

    scrollContainer.style.transform = horizontal
      ? `translateX(-${smoothConfigs.smooth}px)`
      : `translateY(-${smoothConfigs.smooth}px)`;

    requestAnimationFrame(() => smoothScrolling());
  };
  return (
    <PageWrapper ref={page} horizontal={horizontal}>
      <StyledScrollWrapper className="scroll-container" horizontal={horizontal}>
        {children}
      </StyledScrollWrapper>
    </PageWrapper>
  );
};

export default ScrollWrapper;

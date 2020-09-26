import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { DividerWrapper, DividerImage } from './DividerStyles';
import { scrollTriggerProperties } from '../../animations/scrollTriggerProperties';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Divider = ({ src, alt }) => {
  const animeDivider = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animeDivider.current,
      { scale: 1.5, rotate: 10 },
      {
        scale: 1,
        rotate: 0,
        scrollTrigger: {
          trigger: animeDivider.current,
          ...scrollTriggerProperties,
        },
      }
    );
  }, [animeDivider]);

  return (
    <DividerWrapper>
      <DividerImage src={src} alt={alt} ref={animeDivider} />
    </DividerWrapper>
  );
};

export default Divider;

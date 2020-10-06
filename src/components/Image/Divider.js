import React, { useRef, useEffect } from 'react';
import { string } from 'prop-types';
import { isBrowser } from 'react-device-detect';
import gsap from 'gsap';

import { DividerWrapper, DividerImage } from './DividerStyles';
import {
  scrollTriggerProperties,
  scrollTriggerPropertiesMobile,
} from '../../animations/scrollTriggerProperties';

const Divider = ({ src, alt }) => {
  const animeDivider = useRef(null);

  useEffect(() => {
    if (isBrowser) {
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
    } else {
      gsap.fromTo(
        animeDivider.current,
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: animeDivider.current,
            ...scrollTriggerPropertiesMobile,
          },
        }
      );
    }
  }, [animeDivider]);

  return (
    <DividerWrapper>
      <DividerImage src={src} alt={alt} ref={animeDivider} />
    </DividerWrapper>
  );
};

export default Divider;

Divider.propTypes = {
  src: string,
  alt: string,
};

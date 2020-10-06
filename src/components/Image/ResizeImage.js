import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import gsap from 'gsap';

import {
  ImageWrapper,
  InnerWrapper,
  StyledResizeImage,
} from './ResizeImageStyle';
import Letter from '../Letter/Letter';
import {
  scrollTriggerProperties,
  scrollTriggerPropertiesMobile,
} from '../../animations/scrollTriggerProperties';

const ResizeImage = ({ src, alt, left, secondary, withoutLetter, letter }) => {
  const resizeImg = useRef(null);

  useEffect(() => {
    if (isBrowser) {
      gsap.fromTo(
        resizeImg.current,
        { scale: 1.5, xPercent: 25 },
        {
          scale: 1,
          xPercent: 0,
          scrollTrigger: {
            trigger: resizeImg.current,
            ...scrollTriggerProperties,
          },
        }
      );
    } else {
      gsap.fromTo(
        resizeImg.current,
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: resizeImg.current,
            ...scrollTriggerPropertiesMobile,
          },
        }
      );
    }
  }, [resizeImg]);

  return (
    <ImageWrapper left={left} secondary={secondary}>
      <InnerWrapper>
        <StyledResizeImage src={src} alt={alt || 'image'} ref={resizeImg} />
      </InnerWrapper>
      {!withoutLetter && <Letter left={left} letter={letter} />}
    </ImageWrapper>
  );
};

export default ResizeImage;

const { bool, string } = PropTypes;
ResizeImage.propTypes = {
  src: string.isRequired,
  alt: string,
  left: bool,
  secondary: bool,
  withoutLetter: bool,
  letter: string,
};
ResizeImage.defaultProps = {
  src: '',
  alt: '',
  left: false,
  secondary: false,
  withoutLetter: false,
  letter: '',
};

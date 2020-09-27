import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  ImageWrapper,
  InnerWrapper,
  StyledResizeImage,
} from './ResizeImageStyle';
import Letter from '../Letter/Letter';
import { scrollTriggerProperties } from '../../animations/scrollTriggerProperties';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const ResizeImage = ({
  src,
  alt,
  left,
  secondary,
  withoutLetter,
  letter,
  last,
  transform,
}) => {
  const resizeImg = useRef(null);

  useEffect(() => {
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
  }, [resizeImg]);

  return (
    <ImageWrapper left={left} secondary={secondary} transform={transform}>
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

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import gsap from 'gsap';

import { StyledGalleryImage } from './GalleryImageStyles';
import {
  scrollTriggerProperties,
  scrollTriggerPropertiesMobile,
} from '../../animations/scrollTriggerProperties';

const GalleryImage = ({ src, alt, from, to }) => {
  const moveImg = useRef(null);
  useEffect(() => {
    const animationTrigger = document.querySelector('.gallery-container');
    if (isBrowser) {
      gsap.fromTo(
        moveImg.current,
        { yPercent: from },
        {
          yPercent: to,
          scrollTrigger: {
            trigger: animationTrigger,
            ...scrollTriggerProperties,
          },
        }
      );
    } else {
      gsap.fromTo(
        moveImg.current,
        { yPercent: from },
        {
          yPercent: to,
          scrollTrigger: {
            trigger: animationTrigger,
            ...scrollTriggerPropertiesMobile,
          },
        }
      );
    }
  }, [moveImg]);

  return <StyledGalleryImage ref={moveImg} src={src} alt={alt || 'image'} />;
};

export default GalleryImage;

const { string, number } = PropTypes;
GalleryImage.propTypes = {
  src: string.isRequired,
  alt: string,
  from: number.isRequired,
  to: number.isRequired,
};
GalleryImage.defaultProps = {
  src: '',
  alt: 'image',
  from: 0,
  to: 0,
};

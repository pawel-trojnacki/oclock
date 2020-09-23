import React, { useState, useEffect } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';

import {
  HeroWrapper,
  HeroImageWrapper,
  HeroImage,
  ImageOverlay,
  HeadingSpan,
} from './HeroSectionStyles';
import Heading from '../Heading/Heading';
import Img from '../../images/header-image.jpg';
import Scroll from '../Scroll/Scroll';

const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const scaleSize = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  //   const [scaleImg, setScaleImg] = useState(1);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScaleImg(() => 1 + window.scrollY / 1000);
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, [scaleImg]);
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <HeroImage
          src={Img}
          initial={{ x: '-20%' }}
          animate={{ x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
          // style={{ scale: scaleSize }}
        />
        <ImageOverlay
          animate={{ scaleX: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
        />
      </HeroImageWrapper>
      <Heading big zi="1" blend="difference">
        <HeadingSpan
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          Luxury
        </HeadingSpan>
        <HeadingSpan
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          on your wrist
        </HeadingSpan>
      </Heading>
      <Scroll />
    </HeroWrapper>
  );
};

export default HeroSection;

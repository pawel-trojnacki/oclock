import React, { useRef, useEffect } from 'react';
// import { useViewportScroll, useTransform } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  HeroWrapper,
  HeroImageWrapper,
  HeroImage,
  ImageOverlay,
} from './HeroSectionStyles';
import Heading from '../Heading/Heading';
import Img from '../../images/header-image.jpg';
import Scroll from '../Scroll/Scroll';
import { scrollTriggerProperties } from '../../animations/scrollTriggerProperties';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const HeroSection = () => {
  const heroImg = useRef(null);
  const heroTitle = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      document.body.style.overflowY = 'scroll';
    }, 2500);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroImg.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: heroImg.current,
          ...scrollTriggerProperties,
          start: 'center center',
        },
      }
    );
  }, [heroImg]);

  useEffect(() => {
    gsap.fromTo(
      heroTitle.current,
      { yPercent: 0 },
      {
        yPercent: -50,
        scrollTrigger: {
          trigger: heroTitle.current,
          ...scrollTriggerProperties,
          start: 'center center',
        },
      }
    );
  }, [heroTitle]);

  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <HeroImage
          ref={heroImg}
          src={Img}
          alt="man with a watch on his wrist"
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
      <Heading ref={heroTitle} bold big zi="1" blend="difference">
        <Fade cascade>Luxury</Fade>
        <Fade cascade>on your wrist</Fade>
      </Heading>
      <Scroll />
    </HeroWrapper>
  );
};

export default HeroSection;

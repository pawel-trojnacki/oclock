import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { LetterWrapper, StyledLetter } from './LetterStyles';
import { scrollTriggerProperties } from '../../animations/scrollTriggerProperties';

const Letter = ({ letter, left }) => {
  const animeWrapper = useRef(null);
  const animeLetter = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animeLetter.current,
      { y: '40px' },
      {
        y: '-100px',
        scrollTrigger: {
          trigger: animeWrapper.current,
          ...scrollTriggerProperties,
        },
      }
    );
  }, [animeLetter, animeWrapper]);
  return (
    <LetterWrapper left={left} ref={animeLetter}>
      <StyledLetter ref={animeWrapper}>{letter}</StyledLetter>
    </LetterWrapper>
  );
};

export default Letter;

const { bool, string } = PropTypes;

Letter.propTypes = {
  left: bool,
  letter: string,
};

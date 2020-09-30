import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  StyledAboutSection,
  ImagesWrapper,
  ContentWrapper,
  StyledParagraph,
} from './AboutSectionStyles';
import ResizeImage from '../../components/Image/ResizeImage';
import Heading from '../../components/Heading/Heading';

import Img1 from '../../images/about/about-4.jpg';
import Img2 from '../../images/about/about-3.jpg';
import Img3 from '../../images/about/about-5.jpg';

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <ContentWrapper>
        <Heading as="h2" align="left" lowercase>
          <Fade cascade>Our brand is the </Fade>
          <Fade cascade>result of the passion</Fade>
          <Fade cascade>for elegance</Fade>
        </Heading>
        <Fade>
          <StyledParagraph>
            Blow the man down crow's nest lee red ensign Sail ho fathom splice
            the main brace tackle Chain Shot Davy Jones' Locker. Hearties draft
            cackle fruit aft grog spanker belaying pin prow stern spyglass.
          </StyledParagraph>
        </Fade>
      </ContentWrapper>
      <ImagesWrapper>
        <ResizeImage src={Img1} letter="L" secondary left />
        <ResizeImage src={Img2} letter="C" secondary />
        <ResizeImage src={Img3} letter="K" secondary />
      </ImagesWrapper>
    </StyledAboutSection>
  );
};

export default AboutSection;

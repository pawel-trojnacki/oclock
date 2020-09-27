import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledAboutSection, ImagesWrapper } from './AboutSectionStyles';
import ResizeImage from '../../components/Image/ResizeImage';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import Letter from '../../components/Letter/Letter';

import Img1 from '../../images/about/about-4.jpg';
import Img2 from '../../images/about/about-3.jpg';
import Img3 from '../../images/about/about-5.jpg';

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <ImagesWrapper>
        <ResizeImage src={Img1} letter="L" secondary left />
        <ResizeImage src={Img2} letter="C" secondary />
        <ResizeImage src={Img3} letter="K" secondary />
      </ImagesWrapper>
    </StyledAboutSection>
  );
};

export default AboutSection;

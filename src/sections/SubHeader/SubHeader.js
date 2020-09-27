import React from 'react';
import Fade from 'react-reveal/Fade';
import ResizeImage from '../../components/Image/ResizeImage';
import { Wrapper, InnerWrapper, TextWrapper } from './SubHeaderStyles';
import Img1 from '../../images/about/about-2.jpg';
import Img2 from '../../images/about/about-1.jpg';
import Heading from '../../components/Heading/Heading';

const SubHeader = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TextWrapper>
          <Heading as="h2" tight medium align="left">
            <Fade cascade>Watches</Fade>
            <Fade cascade>of the</Fade>
            <Fade cascade>highest</Fade>
            <Fade cascade>quality</Fade>
          </Heading>
        </TextWrapper>
        <ResizeImage src={Img1} alt="black watch" letter="O" />
        <ResizeImage src={Img2} alt="wath parts" withoutLetter />
      </InnerWrapper>
    </Wrapper>
  );
};

export default SubHeader;

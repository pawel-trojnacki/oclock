import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';

export const ProductPageWrapper = styled.div`
  margin: 50px auto 150px;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailsWrapper = styled(motion.div)`
  padding: ${isMobile ? '0 30px' : '0 30px 200px'};
  @media (min-width: 600px) {
    padding: ${isMobile ? '0 10%' : '0 10% 200px'};
  }
  @media (min-width: 768px) {
    padding: ${isMobile ? '0 15%' : '0 15% 200px'};
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 50%;
    padding: 0 5%;
  }

  @media (min-width: 1280px) and (orientation: landscape) {
    padding: 0 7%;
  }
`;

export const ProductTitle = styled(Heading)`
  margin: 20px 0;
  @media (min-width: 600px) {
    margin: 20px 0 30px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    text-align: left;
    margin: 0 0 20px 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 30px 0;
  text-align: justify;
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 30px 0 50px;
  }
`;

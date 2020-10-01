import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageWrapperBrowser = styled.div`
  overflow: hidden;
  margin: 20px auto 0;
  width: 55vh;
`;

export const ImageWrapperMobile = styled(ImageWrapperBrowser)`
  width: 80%;
  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const ProductImage = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 40%;
    * {
      width: 100%;
      height: 100%;
    }
  }
`;

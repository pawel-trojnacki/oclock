import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageWrapperBrowser = styled.div`
  overflow: hidden;
  margin: 20px auto 0;
  width: 75vh;
`;

export const ImageWrapperMobile = styled(ImageWrapperBrowser)`
  width: 90%;
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

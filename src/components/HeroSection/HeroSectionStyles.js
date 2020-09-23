import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
`;

export const HeroImageWrapper = styled.div`
  width: 70%;
  height: 50vh;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 60%;
    height: 55vh;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 35%;
    height: 65vh;
  }
`;

export const HeroImage = styled(motion.img)`
  width: 99%;
  height: 99%;
  object-fit: cover;
  object-position: center;
  margin: auto;
`;

export const ImageOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.black};
  transform-origin: right;
`;

export const HeadingSpan = styled(motion.span)`
  display: block;
  position: relative;
`;

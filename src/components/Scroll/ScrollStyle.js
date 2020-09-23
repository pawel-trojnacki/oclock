import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// import Paragraph from '../Parahraph/Paragraph';

export const StyledScroll = styled(motion.div)`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 3vh;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const LineWrapper = styled.span`
  display: block;
  margin: 10px auto;
  overflow: hidden;

  ${({ horizontal }) =>
    horizontal &&
    css`
      display: inline-block;
    `}
`;

export const Line = styled(motion.span)`
  display: block;
  margin: 0 auto;
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    height: 30px;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      height: 1px;
      width: 24px;

      @media (min-width: 768px) {
        height: 1px;
        width: 36px;
      }
    `}
`;

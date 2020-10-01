import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledScroll = styled(motion.div)`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);

  ${({ horizontal }) =>
    horizontal &&
    css`
      left: 40px;
      bottom: 7vh;
      transform: none;
      display: flex;
      align-items: center;

      @media (min-width: 1200px) and (orientation: landscape) {
        left: calc((100vw - 1160px) / 2);
      }
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

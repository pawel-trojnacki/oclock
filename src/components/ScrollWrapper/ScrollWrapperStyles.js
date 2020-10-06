import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';

export const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;

  ${({ horizontal }) =>
    !horizontal &&
    css`
      width: 100%;
    `}
  ${isMobile &&
  css`
    display: none;
  `}
`;

export const StyledScrollWrapper = styled.div`
  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

import styled, { css } from 'styled-components';

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
`;

export const StyledScrollWrapper = styled.div`
  /* pointer-events: none; */

  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

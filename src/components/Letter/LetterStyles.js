import styled, { css } from 'styled-components';

export const LetterWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  mix-blend-mode: difference;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 100%;
  top: 0;
  left: -60px;

  ${({ left }) =>
    left &&
    css`
      left: auto;
      right: -60px;
    `}
`;

export const StyledLetter = styled.span`
  display: block;
  font-size: 120px;
  font-weight: ${({ theme }) => theme.bold};
  opacity: 0;
  @media (min-width: 1024px) and (orientation: landscape) {
    opacity: 1;
  }
`;

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
  left: -30px;

  @media (min-width: 768px) {
    left: -60px;
  }

  ${({ left }) =>
    left &&
    css`
      left: auto;
      right: -30px;
      @media (min-width: 768px) {
        left: auto;
        right: -60px;
      }
    `}
`;

export const StyledLetter = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.xxxl};
  font-weight: ${({ theme }) => theme.bold};

  @media (min-width: 768px) {
    /* font-size: ${({ theme }) => theme.xxxxl}; */
    font-size: 120px;
  }
`;

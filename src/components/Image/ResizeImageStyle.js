import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  margin: 0 0 0 20px;

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 25%;
  }

  /* ${({ left }) => left && css``} */

  ${({ secondary }) =>
    secondary &&
    css`
      width: 50%;
    `}
`;

export const InnerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 60vw;
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    height: 500px;
  }
`;

export const StyledResizeImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

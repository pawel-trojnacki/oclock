import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 60vw;
  margin: 0 0 0 20px;
  transform: ${({ transform }) => transform || 'none'};
  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 25%;
    height: 500px;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 40%;
      margin: 20px;
      @media (min-width: 768px) {
        height: 500px;
        margin: 40px 20px;
      }
      @media (min-width: 1024px) and (orientation: landscape) {
        height: 600px;
        width: 40%;
      }
    `}

  ${({ left }) =>
    left &&
    css`
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    `}
`;

export const InnerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const StyledResizeImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

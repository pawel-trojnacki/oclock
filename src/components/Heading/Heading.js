import styled, { css } from 'styled-components';

const Heading = styled.h1`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ theme }) => theme.xl};
  text-transform: uppercase;
  line-height: ${({ theme, tight }) =>
    tight ? theme.lineHeightS : theme.lineHeightM};
  color: ${({ theme, color }) => (color ? color : theme.white)};
  mix-blend-mode: ${({ blend }) => blend || 'none'};
  z-index: ${({ zi }) => zi || 0};
  margin: ${({ margin }) => margin || '10px'};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.regular)};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.xxl};
  }

  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.xl};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.xxxl};
      }
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.xxl};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.xxxxl};
      }
    `}
`;

export default Heading;

import styled, { css } from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.xl};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeightM};
  color: ${({ theme }) => theme.white};
  mix-blend-mode: ${({ blend }) => blend || 'none'};
  z-index: ${({ zi }) => zi || 0};
  margin: ${({ margin }) => margin || '10px'};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.xxl};
  }

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.xxl};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.xxxl};
      }
    `}
`;

export default Heading;

import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.xs};
  line-height: ${({ theme }) => theme.lineHeightM};
  color: ${({ theme, black }) => (black ? theme.black : theme.white)};
  margin: ${({ margin }) => margin || '10px'};
  text-align: ${({ justify }) => justify || 'left'};
  text-transform: ${({ uppercase }) => uppercase || 'none'};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.m};
  }

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.m};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.l};
      }
    `}
`;

export default Paragraph;

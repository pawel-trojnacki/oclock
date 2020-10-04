import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.xs};
  line-height: ${({ theme }) => theme.lineHeightL};
  color: ${({ theme, black }) => (black ? theme.black : theme.white)};
  margin: ${({ margin }) => margin || '10px'};
  text-align: ${({ align }) => align || 'left'};
  text-transform: ${({ uppercase }) => uppercase || 'none'};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.regular)};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.l};
  }

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.m};

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.l};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.red};
      text-align: center;
      @media (min-width: 1024px) {
        text-align: left;
        margin: 10px auto 10px 0;
      }
    `}
`;

export default Paragraph;

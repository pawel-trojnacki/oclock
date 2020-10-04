import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 20px;
  margin: ${({ margin }) => margin || '30px 10px'};
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.xs};
  font-weight: ${({ theme }) => theme.bold};
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 10px 26px;
    border-radius: 26px;
    font-size: ${({ theme }) => theme.s};
  }

  @media (min-width: 1024px) {
    padding: 12px 32px;
    border-radius: 32px;
    font-size: ${({ theme }) => theme.l};
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border-radius: 16px;
      margin: 0;
      padding: 2px 16px;

      @media (min-width: 768px) {
        padding: 4px 22px;
        border-radius: 22px;
      }

      @media (min-width: 1024px) {
        padding: 2px 22px;
      }
    `}
`;

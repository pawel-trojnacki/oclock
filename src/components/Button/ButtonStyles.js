import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 20px;
  margin: ${({ margin }) => margin || '30px 10px'};
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.white};
  /* border: none; */
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
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
`;

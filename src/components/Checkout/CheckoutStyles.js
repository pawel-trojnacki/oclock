import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  padding: 100px 20px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: calc(700px + 12vw);
  }
`;

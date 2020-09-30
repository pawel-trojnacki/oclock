import styled from 'styled-components';

export const DividerWrapper = styled.div`
  overflow: hidden;
`;

export const DividerImage = styled.img`
  height: 45vw;
  width: 100%;

  @media (min-width: 768px) {
    height: 40vw;
  }

  @media (min-width: 1024px) {
    height: 30vw;
  }
`;

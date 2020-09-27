import styled from 'styled-components';

export const Wrapper = styled.section`
  /* background-color: ${({ theme }) => theme.white}; */
  display: flex;
  justify-content: flex-end;
`;

export const InnerWrapper = styled.div`
  margin: 50px 0 70px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin: 80px 0 100px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 120px 0 160px;
    flex-wrap: nowrap;
  }
`;

export const TextWrapper = styled.div`
  width: 90%;
  margin: 0 0 50px 0;
  padding-right: 20vw;

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 40%;
    margin: 0 0 20px 10vw;
    padding-right: 0;
  }
`;

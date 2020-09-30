import styled from 'styled-components';
import Paragraph from '../../components/Paragraph/Paragraph';

export const StyledAboutSection = styled.section`
  margin: 100px auto;
  max-width: 1280px;
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 160px auto 0;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 1024px) and (orientation: landscape) {
    transform: translateY(-350px);
    margin-bottom: -350px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 20px 60px;
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 50%;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 60px 20px 60px 10px;
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 60px 80px 0px 10px;
  }
`;

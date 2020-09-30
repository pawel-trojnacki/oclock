import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  height: 500px;
  position: relative;
  @media (min-width: 768px) {
    height: 700px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    transform: translateY(-250px);
    height: 650px;
  }

  @media (min-width: 1280px) {
    height: 700px;
  }
`;

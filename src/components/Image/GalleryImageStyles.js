import styled from 'styled-components';

export const StyledGalleryImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  width: 45%;
  height: 250px;
  margin: 0;
  :nth-of-type(1) {
    z-index: 4;
    right: 50%;
  }
  :nth-of-type(2) {
    z-index: 3;
    right: 25%;
  }
  :nth-of-type(3) {
    z-index: 2;
    right: 0;
  }
  :nth-of-type(4) {
    display: none;
  }
  @media (min-width: 768px) {
    height: 380px;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    object-fit: contain;
    width: 26%;
    height: 500px;

    :nth-of-type(1) {
      right: 39%;
    }
    :nth-of-type(2) {
      right: 26%;
    }
    :nth-of-type(3) {
      right: 13%;
    }
    :nth-of-type(4) {
      right: 0;
      display: block;
    }
  }
`;

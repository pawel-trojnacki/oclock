import styled from 'styled-components';

export const StyledCursor = styled.div`
  position: fixed;
  z-index: 1000;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.white};
  background-color: transparent;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-out;
  transition-property: transform, width, height, border, opacity;
  will-change: width, height, transform, border, opacity;
  pointer-events: none;
  mix-blend-mode: difference;

  &.hovered {
    background-color: ${({ theme }) => theme.white};
    width: 46px;
    height: 46px;
  }

  &.enlarged {
    background-color: ${({ theme }) => theme.white};
    transform: translate(-50%, -90%);
    width: 100px;
    height: 100px;
    mix-blend-mode: normal;
  }

  &.enlarged::after {
    display: block;
    text-align: center;
    content: 'VIEW PRODUCT';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.black};
    font-size: 13px;
  }

  &.sticky {
    /* transform: translate(0, 0); */
    border-radius: 20px;
    /* border: 2px solid ${({ theme }) => theme.white}; */
    opacity: 0;

    @media (min-width: 768px) {
      border-radius: 26px;
    }

    @media (min-width: 1024px) {
      border-radius: 32px;
    }
  }
`;

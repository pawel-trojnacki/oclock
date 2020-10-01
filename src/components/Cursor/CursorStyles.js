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
  transition-property: transform, width, height, border;
  /* will-change: width, height, transform, border; */
  pointer-events: none;
  mix-blend-mode: difference;

  &.hovered {
    background-color: ${({ theme }) => theme.white};
    transform: translate(-50%, -50%) scale(1.5);
  }

  &.enlarged {
    background-color: ${({ theme }) => theme.white};
    transform: translate(-50%, -100%) scale(2.8);
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
    font-size: 5px;
  }
`;

// export const CursorInner = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 3px;
//   height: 3px;
//   border-radius: 100%;
//   background-color: ${({ theme }) => theme.white};
//   mix-blend-mode: difference;
//   transition: all 0.2s ease-out;
//   transition-property: width, height, border;
//   will-change: width, height, transform, border;
// `;

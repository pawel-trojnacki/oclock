import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: 30px;

  @media (min-width: 768px) {
    width: 50px;
  }
`;

const Arrow = () => {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.1 40.4">
      <path
        className="st0"
        fill="#FFFFFF"
        d="M6.1,18.3h106.4c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4H6.1c-1.3,0-2.4-1.1-2.4-2.4S4.8,18.3,6.1,18.3z"
      />
      <path
        className="st0"
        fill="#FFFFFF"
        d="M30.2,3.8c0.5,0.8,0.3,1.9-0.5,2.4L6.9,20.7l22.7,14.5c0.8,0.5,1.1,1.6,0.5,2.4c-0.5,0.8-1.6,1.1-2.4,0.5
              l-25-15.9c-0.5-0.3-0.8-0.9-0.8-1.5s0.3-1.2,0.8-1.5l25-15.9C28,3,28.4,2.9,28.7,2.9C29.3,2.9,29.8,3.2,30.2,3.8z"
      />
    </StyledSvg>
  );
};

export default Arrow;

import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { isBrowser } from 'react-device-detect';

const GlobalStyle = createGlobalStyle`
${normalize};
${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Cardo', serif;
    font-weight: 400;
    background-color: #000;
  }

  ${isBrowser &&
  css`
    html,
    body {
      height: 100%;
    }

    body {
      overscroll-behavior-y: none;
    }
  `}

  ::selection {
    background-color: #444;
  }
`}`;

export default GlobalStyle;

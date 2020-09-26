import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

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
    overscroll-behavior-y: none;
    background-color: #000;
  }

  html,
  body {
    height: 100%;
  }

  ::selection {
    background-color: #444;
  }
`}`;

export default GlobalStyle;

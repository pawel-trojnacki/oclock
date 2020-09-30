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
  ::-webkit-scrollbar {
    display: none;
  }

  ${isBrowser &&
  css`
    html,
    body {
      height: 100%;
      scrollbar-width: none;
    }

    body {
      overscroll-behavior-y: none;
    }
  `}

  ::selection {
    background-color: #444;
  }

  h1,
  h2,
  h3,
  p,
  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    object-fit: cover;
    object-position: center;
  }
`}`;

export default GlobalStyle;

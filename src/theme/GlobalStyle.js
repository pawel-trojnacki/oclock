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
    outline: none;
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

  a,
  button {
    outline: none;
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  label {
    display: block;
    text-transform: uppercase;
    color: #fff;
  }

  input,
  select {
    width: 100%;
    border-radius: 0;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    padding: 4px 12px;
    margin-top: 6px;
    line-height: 1.4;

    @media (min-width: 768px) {
      padding: 8px 14px;
    }
    @media (min-width: 1024px) {
      width: 350px;
    }
  }

  input:focus,
  select:focus {
    background-color: #222;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`}`;

export default GlobalStyle;

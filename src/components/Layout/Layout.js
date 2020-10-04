import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {
  MobileView,
  BrowserView,
  isIE,
  isChrome,
  isFirefox,
  isOpera,
} from 'react-device-detect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Navbar from '../Navbar/Navbar';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';
import Cursor from '../Cursor/Cursor';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Layout = ({ children, productPage, shopPage, horizontal }) => {
  if (isIE) {
    return (
      <div>
        Internet Explorer is not supported. Download Chrome/Firefox/Opera.
      </div>
    );
  }
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MobileView>
          <Navbar productPage={productPage} shopPage={shopPage} />
          <main>{children}</main>
        </MobileView>
        <BrowserView>
          <Navbar productPage={productPage} shopPage={shopPage} />
          <main>
            <ScrollWrapper horizontal={horizontal}>{children}</ScrollWrapper>
          </main>
          {(isChrome || isFirefox || isOpera) && <Cursor />}
        </BrowserView>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const { oneOfType, arrayOf, node, bool } = PropTypes;

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  productPage: bool,
  shopPage: bool,
};

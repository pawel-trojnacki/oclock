import React, { useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { MobileView, BrowserView } from 'react-device-detect';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Navbar from './Navbar';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';

const Layout = ({ children, productPage, shopPage, horizontal }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MobileView>
          <Navbar productPage={productPage} shopPage={shopPage} />
          {children}
        </MobileView>
        <BrowserView>
          <Navbar productPage={productPage} shopPage={shopPage} />
          <ScrollWrapper horizontal={horizontal}>{children}</ScrollWrapper>
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

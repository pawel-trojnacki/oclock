import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Navbar from './Navbar';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';

const Layout = ({ children, productPage, shopPage, horizontal }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar productPage={productPage} shopPage={shopPage} />
        <ScrollWrapper horizontal={horizontal}>{children}</ScrollWrapper>
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

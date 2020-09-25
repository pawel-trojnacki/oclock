import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Navbar from './Navbar';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';

const Layout = ({ children, productPage, shopPage }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar productPage={productPage} shopPage={shopPage} />
        {/* <ScrollWrapper horizontal={shopPage}> */}
        {children}
        {/* </ScrollWrapper> */}
      </ThemeProvider>
    </>
  );
};

export default Layout;

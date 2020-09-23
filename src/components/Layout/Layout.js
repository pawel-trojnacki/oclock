import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/theme';
import Navbar from './Navbar';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';

const Layout = ({ children, productPage, shopPage }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, [loaded]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {loaded ? (
          <>
            <Navbar productPage={productPage} shopPage={shopPage} />
            <ScrollWrapper horizontal={shopPage}>{children}</ScrollWrapper>
          </>
        ) : (
          <div>Loading</div>
        )}
      </ThemeProvider>
    </>
  );
};

export default Layout;

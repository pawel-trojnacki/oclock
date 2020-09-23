import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <HeroSection /> */}
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Slide</h1>
    </div>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Slide</h1>
    </div>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Slide</h1>
    </div>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Slide</h1>
    </div>
  </Layout>
);

export default IndexPage;

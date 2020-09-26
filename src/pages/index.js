import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import SubHeader from '../components/SubHeader/SubHeader';
import Divider from '../components/Image/Divider';
import DividerImg from '../images/divider.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <SubHeader />
    <Divider src={DividerImg} alt="elegant watch" />
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

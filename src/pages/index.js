import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import HeroSection from '../sections/HeroSection/HeroSection';
import SubHeader from '../sections/SubHeader/SubHeader';
import Divider from '../components/Image/Divider';
import DividerImg from '../images/divider.jpg';
import AboutSection from '../sections/AboutSection/AboutSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <SubHeader />
    <Divider src={DividerImg} alt="elegant watch" />
    <AboutSection />
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

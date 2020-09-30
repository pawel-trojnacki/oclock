import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import HeroSection from '../sections/HeroSection/HeroSection';
import SubHeader from '../sections/SubHeader/SubHeader';
import Divider from '../components/Image/Divider';
import DividerImg from '../images/divider.jpg';
import AboutSection from '../sections/AboutSection/AboutSection';
import Gallery from '../sections/Gallery/Gallery';
import ContactSection from '../sections/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <SubHeader />
    <Divider src={DividerImg} alt="elegant watch" />
    <AboutSection />
    <ContactSection />
    <Gallery />
    <Footer />
  </Layout>
);

export default IndexPage;

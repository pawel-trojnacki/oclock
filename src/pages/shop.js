import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/ProductList/ProductList';

const ShopPage = () => {
  const { allStrapiProduct } = useStaticQuery(
    graphql`
      query strapiProducts {
        allStrapiProduct(sort: { fields: [created_at], order: [DESC] }) {
          nodes {
            strapiId
            id
            name
            description
            price_in_cents
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      document.body.style.overflowY = 'scroll';
    }, 200);
  }, []);

  return (
    <Layout shopPage horizontal>
      <SEO title="Shop" />
      <ProductList products={allStrapiProduct.nodes} />
    </Layout>
  );
};

export default ShopPage;

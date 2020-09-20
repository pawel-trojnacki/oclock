import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';

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
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Shop" />
      <div>Shoppage</div>
      <ul>
        {allStrapiProduct.nodes.map(
          ({ id, name, description, price_in_cents, image }) => {
            return (
              <li key={id}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{`$${(price_in_cents / 100).toFixed(2)}`}</p>
                <Img fixed={image.childImageSharp.fixed} />
                <a href={`/products/${id}`}>See product</a>
              </li>
            );
          }
        )}
      </ul>
    </Layout>
  );
};

export default ShopPage;

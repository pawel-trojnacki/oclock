import React, { useState, useCallback, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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

  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  // useEffect(() => {
  //   forceUpdate();
  // }, []);
  return (
    <Layout shopPage horizontal>
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
                <Link to={`/products/${id}`}>See product</Link>
              </li>
            );
          }
        )}
      </ul>
    </Layout>
  );
};

export default ShopPage;

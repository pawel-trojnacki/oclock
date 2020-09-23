import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout/Layout';

const ProductTemplate = ({
  data: {
    product: { name, description, price_in_cents, image, id, strapiId },
  },
}) => {
  const { addToCart, cart } = useContext(CartContext);

  const numberPrice = Math.round(price_in_cents);
  return (
    <Layout productPage shopPage>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{`$${(price_in_cents / 100).toFixed(2)}`}</p>
      <Img fixed={image.childImageSharp.fixed} />
      <button
        onClick={() => {
          addToCart({
            strapiId,
            id,
            name,
            description,
            price_in_cents: numberPrice,
            image,
          });
          console.log(cart);
        }}
      >
        Add to cart
      </button>
    </Layout>
  );
};

export const query = graphql`
  query getProduct($slug: String) {
    product: strapiProduct(id: { eq: $slug }) {
      id
      strapiId
      name
      description
      price_in_cents
      image {
        childImageSharp {
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default ProductTemplate;

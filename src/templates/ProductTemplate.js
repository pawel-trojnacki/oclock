import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout/Layout';
import {
  ProductPageWrapper,
  DetailsWrapper,
  ProductTitle,
  StyledParagraph,
} from './ProductTemplateStyle';
import Paragraph from '../components/Paragraph/Paragraph';
import { ProductImage } from '../components/Image/ProductImage';

const ProductTemplate = ({
  data: {
    product: { name, description, price_in_cents, image, id, strapiId },
  },
}) => {
  const { addToCart } = useContext(CartContext);

  const numberPrice = Math.round(price_in_cents);

  return (
    <Layout productPage shopPage>
      <ProductPageWrapper>
        <DetailsWrapper>
          <ProductTitle medium>{name}</ProductTitle>
          <Paragraph margin="0" bold>{`$${(price_in_cents / 100).toFixed(
            2
          )}`}</Paragraph>
          <StyledParagraph>{description}</StyledParagraph>
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
            }}
          >
            Add to cart
          </button>
        </DetailsWrapper>
        <ProductImage>
          <Img fluid={image.childImageSharp.fluid} />
        </ProductImage>
      </ProductPageWrapper>
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
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ProductTemplate;

const { array } = PropTypes;
ProductTemplate.propTypes = {
  product: array.isRequired,
};
ProductTemplate.defaultProps = {
  product: [],
};

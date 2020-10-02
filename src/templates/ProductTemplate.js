import React, { useContext, useState } from 'react';
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
import Button from '../components/Button/Button';
import { ProductImage } from '../components/Image/ProductImage';
import Popup from '../components/Popup/Popup';

const ProductTemplate = ({
  data: {
    product: { name, description, price_in_cents, image, id, strapiId },
  },
}) => {
  const { addToCart } = useContext(CartContext);

  const numberPrice = Math.round(price_in_cents);

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    addToCart({
      strapiId,
      id,
      name,
      description,
      price_in_cents: numberPrice,
      image,
    });
    setIsOpen(true);
  };

  return (
    <Layout productPage shopPage>
      <ProductPageWrapper>
        <DetailsWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ProductTitle medium>{name}</ProductTitle>
          <Paragraph margin="0" bold>{`$${(price_in_cents / 100).toFixed(
            2
          )}`}</Paragraph>
          <StyledParagraph>{description}</StyledParagraph>
          <Button clickFn={handleButtonClick}>Add to cart</Button>
        </DetailsWrapper>
        <ProductImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Img fluid={image.childImageSharp.fluid} />
        </ProductImage>
        <Popup name={name} isOpen={isOpen} setIsOpen={setIsOpen} />
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

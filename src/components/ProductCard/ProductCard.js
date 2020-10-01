import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import { BrowserView, MobileView } from 'react-device-detect';
import { Fade } from 'react-reveal';

import {
  ProductWrapperMobile,
  ProductWrapperBrowser,
} from './ProductCardStyles';
import Heading from '../Heading/Heading';
import { ImageWrapperBrowser, ImageWrapperMobile } from '../Image/ProductImage';
import { aniLinkProperties } from '../../animations/aniLinkProperties';
import { useCursorDispatch } from '../../context/CursorContext';

const ProductCard = ({ product }) => {
  const { id, name, image } = product;
  const dispatch = useCursorDispatch();
  return (
    <li>
      <MobileView>
        <ProductWrapperMobile>
          <AniLink
            to={`/products/${id}`}
            cover
            bg={aniLinkProperties.bg}
            direction="left"
            duration={aniLinkProperties.duration}
          >
            <Fade>
              <ImageWrapperMobile>
                <Img fluid={image.childImageSharp.fluid} alt={name} />
              </ImageWrapperMobile>
            </Fade>
            <Heading small as="h2">
              <Fade cascade>{name}</Fade>
            </Heading>
          </AniLink>
        </ProductWrapperMobile>
      </MobileView>

      <BrowserView>
        <ProductWrapperBrowser>
          <AniLink
            to={`/products/${id}`}
            cover
            bg={aniLinkProperties.bg}
            direction="left"
            duration={aniLinkProperties.duration}
          >
            <ImageWrapperBrowser
              onMouseEnter={() => dispatch({ type: 'ENLARGED' })}
              onMouseLeave={() => dispatch({ type: 'INACTIVE' })}
            >
              <Img fluid={image.childImageSharp.fluid} alt={name} />
            </ImageWrapperBrowser>
            <Heading as="h2" medium>
              {name}
            </Heading>
          </AniLink>
        </ProductWrapperBrowser>
      </BrowserView>
    </li>
  );
};

export default ProductCard;

const { object } = PropTypes;
ProductCard.propTypes = {
  product: object.isRequired,
};
ProductCard.defaultProps = {
  product: {},
};

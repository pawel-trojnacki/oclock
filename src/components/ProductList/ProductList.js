import React from 'react';
import PropTypes from 'prop-types';
import { BrowserView, MobileView } from 'react-device-detect';

import { ProductListMobie, ProductListBrowser } from './ProductListStyles';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      <MobileView>
        <ProductListMobie>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductListMobie>
      </MobileView>
      <BrowserView>
        <ProductListBrowser>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductListBrowser>
      </BrowserView>
    </>
  );
};

export default ProductList;

const { array } = PropTypes;
ProductList.propTypes = {
  products: array.isRequired,
};
ProductList.defaultProps = {
  products: [],
};

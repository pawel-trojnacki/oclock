import React from 'react';
import CartProvider from './src/context/CartContext';
import CursorProvider from './src/context/CursorContext';
export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <CursorProvider>{element}</CursorProvider>
  </CartProvider>
);

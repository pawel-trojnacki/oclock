import React, { createContext, useState } from 'react';
// import { getCart, saveCart } from '../utils/cart';

export const CartContext = createContext(null);

// const CartProvider = ({ children }) => {

//   const [cart, setCart] = useState(getCart());

//   const updateCart = updatedCart => {
//     setCart(updatedCart);
//     saveCart(updatedCart);
//   };

//   const addToCart = (product, quantity = 1) => {
//     const cart = getCart();
//     const productId = cart.findIndex(
//       element => element.strapiId === product.strapiId
//     );
//     if (productId > -1) {
//       cart[productId].quantity += quantity;
//       if (cart[productId].quantity === 0) {
//         cart.splice(productId, 1);
//       }
//       updateCart(cart);
//     } else {
//       product.quantity = quantity;
//       updateCart([...cart, product]);
//     }
//   };

//   const clearCart = () => {
//     updateCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const productId = cart.findIndex(
      element => element.strapiId === product.strapiId
    );
    if (productId > -1) {
      cart[productId].quantity += quantity;
      if (cart[productId].quantity === 0) {
        cart.splice(productId, 1);
      }
    } else {
      product.quantity = quantity;
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

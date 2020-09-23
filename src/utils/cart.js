const windowGlobal = typeof window !== 'undefined' && window;

export const saveCart = cart => {
  windowGlobal.localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCart = () => {
  let cart = [];
  const isNotEmpty = windowGlobal.localStorage.getItem('cart');
  if (isNotEmpty) {
    cart = JSON.parse(windowGlobal.localStorage.getItem('cart'));
  }
  return cart;
};

export const updateCart = (product, quantity = 1) => {
  const cart = getCart();
  const productId = cart.findIndex(
    element => element.strapiId === product.strapiId
  );
  if (productId > -1) {
    cart[productId].quantity += quantity;
    if (cart[productId].quantity === 0) {
      cart.splice(productId, 1);
    }
    saveCart(cart);
  } else {
    product.quantity = quantity;
    saveCart([...cart, product]);
  }
};

export const cartTotal = cart => {
  let total = 0;
  if (cart) {
    cart.map(product => {
      total += (product.price_in_cents / 100).toFixed(2) * product.quantity;
    });
  }
  return total.toFixed(2);
};

export const clearCart = () => {
  saveCart([]);
};

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

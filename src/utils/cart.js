export const saveCart = cart => {
  if (typeof window !== undefined) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const getCart = () => {
  let cart = [];
  if (typeof window !== undefined) {
    const isNotEmpty = localStorage.getItem('cart');
    if (isNotEmpty) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
  }
  return cart;
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

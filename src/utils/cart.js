export const saveCart = cart => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCart = () => {
  const isNotEmpty = localStorage.getItem('cart');
  let cart = [];
  if (isNotEmpty) {
    cart = JSON.parse(localStorage.getItem('cart'));
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

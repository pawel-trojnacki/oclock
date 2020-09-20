import { cartTotal } from './cart';

const cart1 = [{ id: 1, price_in_cents: 20000, quantity: 1 }];
const cart2 = [
  { id: 1, price_in_cents: 20000, quantity: 1 },
  { id: 2, price_in_cents: 15000, quantity: 2 },
];
const cart3 = [
  { id: 1, price_in_cents: 19999, quantity: 1 },
  { id: 1, price_in_cents: 10002, quantity: 1 },
];

it('return 0 when cart is empty', () => {
  expect(`${cartTotal()}`).toBe('0.00');
});

it('return 200 when cart is empty', () => {
  expect(`${cartTotal(cart1)}`).toBe('200.00');
});

it('return 500 when cart is empty', () => {
  expect(`${cartTotal(cart2)}`).toBe('500.00');
});

it('return 500 when cart is empty', () => {
  expect(`${cartTotal(cart3)}`).toBe('300.01');
});

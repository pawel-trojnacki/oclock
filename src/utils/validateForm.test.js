import { validateForm } from './validateForm';

const form1 = {
  shipping_name: 'John D',
  shipping_email: 'john@doe.com',
  shipping_phone: '212343436',
  shipping_address: 'Something Street 11',
  shipping_zip: '12345',
};

const form2 = {
  shipping_name: 'John Doe',
  shipping_email: 'john@doe',
  shipping_phone: '212343436',
  shipping_address: 'Something Street 11',
  shipping_zip: '12345',
};

const form3 = {
  shipping_name: 'John Doe',
  shipping_email: 'john@doe.com',
  shipping_phone: 'www',
  shipping_address: 'Something Street 11',
  shipping_zip: '12345',
};

const form4 = {
  shipping_name: 'John Doe',
  shipping_email: 'john@doe.com',
  shipping_phone: '212343436',
  shipping_address: '11',
  shipping_zip: '12345',
};

const form5 = {
  shipping_name: 'John Doe',
  shipping_email: 'john@doe.com',
  shipping_phone: '212343436',
  shipping_address: 'Something Street 11',
  shipping_zip: '11',
};

const form6 = {
  shipping_name: 'John Doe',
  shipping_email: 'john@doe.com',
  shipping_phone: '212343436',
  shipping_address: 'Something Street 11',
  shipping_zip: '12345',
};

it('return name error', () => {
  expect(validateForm(form1)).toBe('Full name is required');
});

it('return email error', () => {
  expect(validateForm(form2)).toBe('Incorrect email');
});

it('return phone error', () => {
  expect(validateForm(form3)).toBe('Incorrect phone number');
});

it('return address error', () => {
  expect(validateForm(form4)).toBe('Incorrect address');
});

it('return zip code error', () => {
  expect(validateForm(form5)).toBe('Zip code is required');
});

it('return null when form is validated', () => {
  expect(validateForm(form6)).toBeNull();
});

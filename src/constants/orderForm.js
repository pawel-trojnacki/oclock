export const orderFormInitialState = {
  shipping_name: '',
  shipping_email: '',
  shipping_phone: '',
  shipping_country: 'United States',
  shipping_state: 'California',
  shipping_address: '',
  shipping_zip: '',
};

export const orderFormElements = [
  { field: 'shipping_name', name: 'full name', type: 'text' },
  { field: 'shipping_email', name: 'email', type: 'email' },
  { field: 'shipping_phone', name: 'phone', type: 'tel' },
  { field: 'shipping_country', name: 'country', type: 'country' },
  { field: 'shipping_state', name: 'state', type: 'text' },
  { field: 'shipping_address', name: 'address', type: 'text' },
  { field: 'shipping_zip', name: 'zip code', type: 'text' },
];

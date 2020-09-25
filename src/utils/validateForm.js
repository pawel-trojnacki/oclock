const emailPattern = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
);
const phonePattern = new RegExp(/^[0-9\b]+$/);

export const validateForm = ({
  shipping_name,
  shipping_email,
  shipping_phone,
  shipping_address,
  shipping_zip,
}) => {
  if (
    shipping_name.length < 5 ||
    shipping_name.indexOf(' ') < 2 ||
    shipping_name.indexOf(' ') > shipping_name.length - 3
  ) {
    return 'Full name is required';
  } else if (!emailPattern.test(shipping_email)) {
    return 'Incorrect email';
  } else if (!phonePattern.test(shipping_phone) || shipping_phone.length > 9) {
    return 'Incorrect phone number';
  } else if (shipping_address.length < 8) {
    return 'Incorrect address';
  } else if (shipping_zip.length < 4) {
    return 'Zip code is required';
  }

  return null;
};

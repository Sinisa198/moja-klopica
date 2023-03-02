export const validateName = (name) => name && typeof name === 'string';

export const validatePassword = (password) =>
  password && typeof password === 'string';

export const validatePhone = (phone) => {
  const regexPhone = /^\d{10}$/;
  return regexPhone.test(phone);
};

export const validateRegistration = (data) =>
  validateName(data.name) &&
  validateName(data.email) &&
  validatePassword(data.password) &&
  validatePhone(data.phone);

export const validateName = (name) => name && typeof name === 'string';

export const validatePassword = (password) =>
  password && typeof password === 'string';

export const validatePhone = (phone) => {
  const regexPhone = /^\d{10}$/;
  return regexPhone.test(phone);
};

export const validateEmail = (email) => {
  const regexMail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexMail.test(email);
};

export const validateRegistration = (data) =>
  validateName(data.name) &&
  validateName(data.email) &&
  validatePassword(data.password) &&
  validatePhone(data.phone);

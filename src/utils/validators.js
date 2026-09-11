export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
};

export const isValidPassword = (password) => {
  return typeof password === 'string' && password.length >= 6;
};

export const sanitizeString = (str) => {
  return typeof str === 'string' ? str.trim() : '';
};

// src/utils/validators.js

export const isEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPasswordStrong = (password) => {
  // Min 6 caracteres, al menos una letra y un número
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
};

export const isNotEmpty = (value) => value && value.trim() !== "";

export const isNumber = (value) => !isNaN(Number(value));

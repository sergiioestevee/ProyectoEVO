// src/services/auth.service.js

import { users } from "../data/users.mock";

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (email, password) => {
  await delay();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Credenciales incorrectas");
  return { ...user };
};

export const register = async (newUser) => {
  await delay();
  const exists = users.find((u) => u.email === newUser.email);
  if (exists) throw new Error("El usuario ya existe");

  const createdUser = { id: Date.now(), role: "buyer", ...newUser };
  users.push(createdUser);
  return createdUser;
};

export const getUserById = async (id) => {
  await delay();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

// src/services/product.service.js

import { products } from "../data/products.mock";

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay();
  return [...products];
};

export const getProductById = async (id) => {
  await delay();
  const product = products.find((p) => p.id === Number(id));
  if (!product) throw new Error("Producto no encontrado");
  return product;
};

export const addProduct = async (product) => {
  await delay();
  const newProduct = { id: Date.now(), ...product };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = async (id, updatedFields) => {
  await delay();
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) throw new Error("Producto no encontrado");
  products[index] = { ...products[index], ...updatedFields };
  return products[index];
};

export const deleteProduct = async (id) => {
  await delay();
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) throw new Error("Producto no encontrado");
  products.splice(index, 1);
  return true;
};

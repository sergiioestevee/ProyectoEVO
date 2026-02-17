// src/services/order.service.js

import { orders } from "../data/orders.mock";

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const getOrders = async () => {
  await delay();
  return [...orders];
};

export const getOrderById = async (id) => {
  await delay();
  const order = orders.find((o) => o.id === Number(id));
  if (!order) throw new Error("Pedido no encontrado");
  return order;
};

export const addOrder = async (order) => {
  await delay();
  const newOrder = { id: Date.now(), status: "pending", ...order };
  orders.push(newOrder);
  return newOrder;
};

export const updateOrderStatus = async (id, status) => {
  await delay();
  const index = orders.findIndex((o) => o.id === Number(id));
  if (index === -1) throw new Error("Pedido no encontrado");
  orders[index].status = status;
  return orders[index];
};

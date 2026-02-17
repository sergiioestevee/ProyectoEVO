// src/data/orders.mock.js

export const orders = [
  {
    id: 1,
    buyerId: 1,
    sellerId: 2,
    products: [
      { id: 1, name: "Monitor 24 pulgadas", price: 150, quantity: 2 },
      { id: 2, name: "Teclado mecánico", price: 70, quantity: 1 },
    ],
    total: 370,
    status: "pending", // pending | shipped | delivered
    date: "2026-02-17",
  },
  {
    id: 2,
    buyerId: 4,
    sellerId: 2,
    products: [{ id: 3, name: "Silla ergonómica", price: 120, quantity: 1 }],
    total: 120,
    status: "shipped",
    date: "2026-02-15",
  },
];

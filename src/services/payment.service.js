// src/services/payment.service.js

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const processPayment = async (orderId, amount) => {
  await delay();
  // Siempre simula pago exitoso
  return {
    success: true,
    orderId,
    amount,
    message: "Pago procesado correctamente (simulado)",
  };
};

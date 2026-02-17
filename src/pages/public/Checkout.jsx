// src/pages/public/Checkout.jsx

import React from "react";
import { useCart } from "../../hooks/useCart";
import Button from "../../components/ui/Button";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  const handleConfirm = () => {
    alert("Pedido confirmado! (simulado)");
    clearCart();
  };

  if (cartItems.length === 0) return <p>No hay productos en el carrito.</p>;

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <Button variant="primary" onClick={handleConfirm}>
        Confirmar pedido
      </Button>
    </div>
  );
};

export default Checkout;

// src/hooks/useCart.js

import { useContext } from "react";
import CartContext from "../context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  const { cartItems, addToCart, removeFromCart, clearCart, totalPrice } =
    context;

  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
    getItemQuantity,
  };
};

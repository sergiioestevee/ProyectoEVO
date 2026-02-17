// src/pages/public/Cart.jsx

import React from "react";
import { useCart } from "../../hooks/useCart";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();

  const columns = [
    { header: "Nombre", accessor: "name" },
    { header: "Precio", accessor: "price" },
    { header: "Cantidad", accessor: "quantity" },
    {
      header: "Acciones",
      render: (row) => (
        <Button variant="danger" onClick={() => removeFromCart(row.id)}>
          Quitar
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <Table columns={columns} data={cartItems} />
          <h3>Total: ${totalPrice}</h3>
          <Button variant="secondary" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;

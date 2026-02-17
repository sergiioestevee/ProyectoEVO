// src/pages/admin/AdminDashboard.jsx

import React, { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { users } from "../../data/users.mock";
import { products } from "../../data/products.mock";
import { orders } from "../../data/orders.mock";
import Card from "../../components/ui/Card";

const AdminDashboard = () => {
  const { setProducts, products: allProducts } = useContext(ProductContext);
  const { setOrders, orders: allOrders } = useContext(OrderContext);

  useEffect(() => {
    setProducts(products);
    setOrders(orders);
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card>
        <h3>Usuarios</h3>
        <p>{users.length}</p>
      </Card>
      <Card>
        <h3>Productos</h3>
        <p>{allProducts.length}</p>
      </Card>
      <Card>
        <h3>Pedidos</h3>
        <p>{allOrders.length}</p>
      </Card>
    </div>
  );
};

export default AdminDashboard;

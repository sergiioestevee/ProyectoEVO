// src/pages/seller/SellerDashboard.jsx

import React, { useEffect, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { OrderContext } from "../../context/OrderContext";
import { products as mockProducts } from "../../data/products.mock";
import { orders as mockOrders } from "../../data/orders.mock";
import { useAuth } from "../../hooks/useAuth";
import Card from "../../components/ui/Card";

const SellerDashboard = () => {
  const { user } = useAuth();
  const { products, setProducts } = useContext(ProductContext);
  const { orders, setOrders } = useContext(OrderContext);

  useEffect(() => {
    // Solo productos del seller logueado
    setProducts(mockProducts.filter((p) => p.sellerId === user?.id));
    setOrders(mockOrders.filter((o) => o.sellerId === user?.id));
  }, [user]);

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card>
        <h3>Productos</h3>
        <p>{products.length}</p>
      </Card>
      <Card>
        <h3>Pedidos</h3>
        <p>{orders.length}</p>
      </Card>
    </div>
  );
};

export default SellerDashboard;

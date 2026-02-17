// src/pages/seller/SellerOrders.jsx

import React, { useEffect, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { orders as mockOrders } from "../../data/orders.mock";
import { useAuth } from "../../hooks/useAuth";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const SellerOrders = () => {
  const { user } = useAuth();
  const { orders, setOrders, updateOrderStatus } = useContext(OrderContext);

  useEffect(() => {
    setOrders(mockOrders.filter((o) => o.sellerId === user?.id));
  }, [user]);

  const handleChangeStatus = (id, status) => {
    updateOrderStatus(id, status);
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Comprador", accessor: "buyerId" },
    { header: "Total", accessor: "total" },
    { header: "Estado", accessor: "status" },
    {
      header: "Acciones",
      render: (row) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {row.status !== "shipped" && (
            <Button
              variant="primary"
              onClick={() => handleChangeStatus(row.id, "shipped")}
            >
              Enviado
            </Button>
          )}
          {row.status !== "delivered" && (
            <Button
              variant="secondary"
              onClick={() => handleChangeStatus(row.id, "delivered")}
            >
              Entregado
            </Button>
          )}
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={orders} />;
};

export default SellerOrders;

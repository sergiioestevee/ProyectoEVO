// src/pages/seller/SellerProducts.jsx

import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products as mockProducts } from "../../data/products.mock";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { useAuth } from "../../hooks/useAuth";

const SellerProducts = () => {
  const { user } = useAuth();
  const { products, setProducts, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  useEffect(() => {
    setProducts(mockProducts.filter((p) => p.sellerId === user?.id));
  }, [user]);

  const handleAdd = () => {
    if (!newProductName || !newProductPrice) return;
    addProduct({
      id: Date.now(),
      name: newProductName,
      price: Number(newProductPrice),
      stock: 10,
      image: "/assets/images/placeholder-product.png",
      sellerId: user.id,
      category: "General",
    });
    setNewProductName("");
    setNewProductPrice("");
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "name" },
    { header: "Precio", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    {
      header: "Acciones",
      render: (row) => (
        <Button variant="danger" onClick={() => deleteProduct(row.id)}>
          Borrar
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Mis Productos</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <Button variant="primary" onClick={handleAdd}>
          Añadir Producto
        </Button>
      </div>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default SellerProducts;

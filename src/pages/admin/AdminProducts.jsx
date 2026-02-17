// src/pages/admin/AdminProducts.jsx

import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products as mockProducts } from "../../data/products.mock";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const AdminProducts = () => {
  const { products, setProducts, deleteProduct } = useContext(ProductContext);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "name" },
    { header: "Precio", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    { header: "Categoría", accessor: "category" },
    {
      header: "Acciones",
      render: (row) => (
        <Button variant="danger" onClick={() => deleteProduct(row.id)}>
          Borrar
        </Button>
      ),
    },
  ];

  return <Table columns={columns} data={products} />;
};

export default AdminProducts;

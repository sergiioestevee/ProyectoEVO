// src/pages/public/ProductDetail.jsx

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { useCart } from "../../hooks/useCart";
import Button from "../../components/ui/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;

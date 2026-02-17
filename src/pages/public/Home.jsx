// src/pages/public/Home.jsx

import React, { useEffect, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products as mockProducts } from "../../data/products.mock";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";

const Home = () => {
  const { setProducts, products } = useContext(ProductContext);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map((product) => (
        <Card key={product.id} style={{ width: "200px" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "120px", objectFit: "cover" }}
          />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Añadir al carrito
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Home;

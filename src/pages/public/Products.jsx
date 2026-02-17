// src/pages/public/Products.jsx

import React, { useEffect, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products as mockProducts } from "../../data/products.mock";
import { useFilters } from "../../hooks/useFilters";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";

const Products = () => {
  const { setProducts, products } = useContext(ProductContext);
  const { addToCart } = useCart();
  const { search, setSearch, filteredItems } = useFilters(products);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filteredItems.map((product) => (
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
    </div>
  );
};

export default Products;

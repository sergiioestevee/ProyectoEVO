import React, { useEffect, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products as mockProducts } from "../../data/products.mock";
import { useFilters } from "../../hooks/useFilters";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";
import "../../assets/styles/products.css";

const Products = () => {
  const { setProducts, products } = useContext(ProductContext);
  const { addToCart } = useCart();
  const { search, setSearch, filteredItems } = useFilters(products);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div className="products-page">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="products-grid">
        {filteredItems.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image || "https://via.placeholder.com/200x120"}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <Button variant="primary" size="small" onClick={() => addToCart(product)}>
              Añadir al carrito
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;

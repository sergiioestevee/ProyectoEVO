// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";
import "./index.css";
import "./assets/styles/globals.css";

// Contextos
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <AppRouter />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);

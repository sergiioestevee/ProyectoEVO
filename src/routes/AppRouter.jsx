// src/routes/AppRouter.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Layouts
import AdminLayout from "../pages/admin/AdminLayout";
import SellerLayout from "../pages/seller/SellerLayout";
import BuyerLayout from "../pages/buyer/BuyerLayout";

// Páginas públicas
import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetail from "../pages/public/ProductDetail";
import Cart from "../pages/public/Cart";
import Checkout from "../pages/public/Checkout";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

// Admin pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminProducts from "../pages/admin/AdminProducts";
import AdminOrders from "../pages/admin/AdminOrders";

// Seller pages
import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerProducts from "../pages/seller/SellerProducts";
import SellerOrders from "../pages/seller/SellerOrders";

// Buyer pages
// Todas las páginas públicas se renderizan dentro de BuyerLayout

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Buyer */}
        <Route
          path="/buyer/*"
          element={
            <ProtectedRoute role="buyer">
              <BuyerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Seller */}
        <Route
          path="/seller/*"
          element={
            <ProtectedRoute role="seller">
              <SellerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<SellerProducts />} />
          <Route path="orders" element={<SellerOrders />} />
        </Route>

        {/* Admin */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* Ruta catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

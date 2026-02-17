// src/pages/seller/SellerLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import "../../assets/styles/components/sidebar.css";

const SellerLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar role="seller" />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;

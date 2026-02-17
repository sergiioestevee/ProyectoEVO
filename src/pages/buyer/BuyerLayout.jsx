// src/pages/buyer/BuyerLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import "../../assets/styles/sidebar.css";
import Navbar from "../../components/layout/Navbar";

const BuyerLayout = () => {
  return (
    <div className="buyer-container" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar role="buyer" />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BuyerLayout;

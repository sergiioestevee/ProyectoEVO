// src/pages/admin/AdminLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import "../../assets/styles/components/sidebar.css";

const AdminLayout = () => {
  return (
    <div className="admin-container" style={{ display: "flex" }}>
      <Sidebar role="admin" />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

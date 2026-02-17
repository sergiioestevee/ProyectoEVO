// src/components/layout/Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/sidebar.css";

const Sidebar = ({ role }) => {
  const location = useLocation();

  const sellerLinks = [
    { path: "/seller", label: "Dashboard" },
    { path: "/seller/products", label: "Mis Productos" },
    { path: "/seller/orders", label: "Pedidos" },
  ];

  const adminLinks = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/users", label: "Usuarios" },
    { path: "/admin/products", label: "Productos" },
    { path: "/admin/orders", label: "Pedidos" },
  ];

  const links = role === "admin" ? adminLinks : sellerLinks;

  return (
    <aside className="sidebar">
      <ul>
        {links.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

// src/components/layout/Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../ui/Button";
import Logo from "../../assets/logo/logo.svg";
import "../../assets/styles/components/navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-content container">
        <Link to="/">
          <img src={Logo} alt="EvoMarket Logo" height="40" />
        </Link>

        <div className="navbar-links">
          <Link to="/products">Productos</Link>

          {user && user.role === "buyer" && (
            <Link to="/buyer">Panel</Link>
          )}

          {user && user.role === "seller" && (
            <Link to="/seller">Dashboard</Link>
          )}

          {user && user.role === "admin" && (
            <Link to="/admin">Admin</Link>
          )}
        </div>

        <div className="navbar-actions">
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">
                <Button variant="primary">Registro</Button>
              </Link>
            </>
          ) : (
            <>
              <span className="navbar-user">
                {user.name} ({user.role})
              </span>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// src/pages/public/Login.jsx

import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = loginUser(email, password);
    if (!res.success) {
      setError(res.message);
    } else {
      setError("");
      navigate("/products");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Input label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Contraseña" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="primary" type="submit">Iniciar sesión</Button>
    </form>
  );
};

export default Login;

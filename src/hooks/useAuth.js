// src/hooks/useAuth.js

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { users } from "../data/users.mock";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  const { user, login, logout } = context;

  const loginUser = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Credenciales incorrectas" };
    }

    login(foundUser);
    return { success: true };
  };

  const registerUser = (newUser) => {
    const exists = users.find((u) => u.email === newUser.email);

    if (exists) {
      return { success: false, message: "El usuario ya existe" };
    }

    const createdUser = {
      id: Date.now(),
      role: "buyer",
      ...newUser,
    };

    users.push(createdUser);
    login(createdUser);

    return { success: true };
  };

  return {
    user,
    loginUser,
    logout,
    registerUser,
  };
};

// src/context/AuthContext.jsx

import React, { createContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch({ type: "LOGIN", payload: userData });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
